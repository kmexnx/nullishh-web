pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                // Add your build steps here
                sh 'npm install'
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                // Add your test steps here
                sh 'npm run test'
            }
        }
        
        stage('Deploy') {
            steps {
                // Add your deployment steps here
                sh 'npm run deploy'
            }
        }
    }
}
