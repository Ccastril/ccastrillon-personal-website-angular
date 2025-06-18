pipeline {
    agent any
    stage('Build') {
        steps {
            sh 'ls'
            sh 'npm install'
            sh 'echo N | ng analytics off'
            sh 'ng build'
            sh 'ls'
            sh 'cd dist && ls'
            sh 'dc dist/ccastrillon-personal-website-angular/browser && ls'
        }
    }
    stage('S3 Upload') {
        steps {
            withAWS(region: 'us-east-1', credentials: '75850f8c-9b82-44db-8533-1a1ece4df9fe') {
                sh 'ls -la'
                sh 'aws s3 cp dist/ccastrillon-personal-website-angular/browser/. s3://sde-portfolio-client/ --recursive' 
            }

        }
    }
}