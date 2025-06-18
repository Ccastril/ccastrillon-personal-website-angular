
pipeline {
    agent any
    environment {
        bucket = "sde-portfolio-client"
        region = "us-east-1"
    }

    tools {
        nodejs "node"
    }

    stages {
        stage("Environment Setup") {
            steps {
                script {
                    echo "Bucket set to: ${bucket}"
                }
            }
        }
        stage("Prepare") {
            steps {
                sh "npm install aws-sdk"
            }
        }
        stage("Build") {
            steps {
                sh "ng build"
            }
        }
        stage("Deploy to AWS") {
            steps {
                script {
                    withAWS(region: "${region}", credentials: 'AKIAXWJZXHA7BR2RJUHG') {
                        s3Upload(bucket: "${bucket}", includePathPattern: '**/*', workingDir: 'dist/ccastrillon-personal-website-angular/browser', excludePathPattern: '**/node-modules')
                    }
                }
                script {
                    withAWS(region: "${region}", credentials: 'AKIAXWJZXHA7BR2RJUHG') {
                        sh """
                        node -e "const AWS = require('aws-sdk');
                        const cloudfront = new AWS.CloudFront();
                        const params = {
                            DistributionId: '${params.distribution_id}',
                            InvalidationBatch: {
                                CallerReference: String(Date.now()),
                                Paths: {
                                    Quantity: 1,
                                    Items:['/*]
                                }
                            }
                        };
                        cloudfront.createInvalidation(params, (err, data) => {
                            if (err) {
                                console.error('Error creating CloudFront Invalidation:', err);
                            } else {
                                console.log('Successfully created CloudFront Invalidation:', data);
                            }
                        });"
                        """
                    }
                }
            }
        }
    }
}