pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'ls'
                sh 'npm install'
                sh 'echo N | ng analytics off'
                sh 'ng build'
                sh 'ls'
                sh 'cd dist && ls'
                sh 'cd dist/ccastrillon-personal-website-angular/browser && ls'
            }
        }
        stage('S3 Upload') {
            steps {
                withAWS(region: 'us-east-1', credentials: 'AKIAXWJZXHA7BR2RJUHG') {
                    sh 'ls -la'
                    sh 'aws s3 cp dist/ccastrillon-personal-website-angular/browser/. s3://sde-portfolio-client/ --recursive' 
                }

            }
        }
    }
}