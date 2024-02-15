pipeline {
    agent any
    
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/kmexnx/nullishh-web'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        
        stage('Deploy') {
            steps {
                // Add your deployment steps here
            }
        }
    }
}
