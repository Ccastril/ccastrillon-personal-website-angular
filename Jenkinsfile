
pipeline {
    agent any
    options {
        skipDefaultCheckout(true)
    }
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
                cleanWs()
                sh "npm install -g yarn"
                sh "yarn install"
                sh "yarn add aws-sdk"
            }
        }
        stage("Build") {
            steps {
                sh "yarn build"
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
        post {
            // Clean after build
            always {
                cleanWs(cleanWhenNotBuilt: false,
                        deleteDirs: true,
                        disableDeferredWipeout: true,
                        notFailBuild: true,
                        patterns: [[pattern: '.gitignore', type: 'INCLUDE'],
                                [pattern: '.propsfile', type: 'EXCLUDE']])
            }
        }
    }
}