
pipeline {
    agent any
    options {
        skipDefaultCheckout(true)
    }
    tools {
        nodejs('node')
    }
    environment {
        bucket = "sde-portfolio-client"
        region = "us-east-1"
    }
    stages {
        stage("Environment Setup") {
            steps {
                script {
                    echo "Bucket set to: ${bucket}"
                }
            }
        }
        stage("Checkout") {
            steps {
                checkout scm
            }
        }
        stage("Prepare") {
            steps {
                sh "npm version"
                sh "npm install"
                sh "npm install @aws-sdk/client-s3"
            }
        }
        stage("Build") {
            steps {
                sh "npm run build"
            }
        }
        stage("Deploy to AWS") {
            steps {
                script {
                    withAWS(region: "${region}", credentials: 'AKIAXWJZXHA7BR2RJUHG') {
                        s3Upload(bucket: "${bucket}", includePathPattern: '**/*', workingDir: 'dist/ccastrillon-personal-website-angular/browser', excludePathPattern: '**/node-modules')
                    }
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