pipeline {
    agent any
    
    stages {
        import org.jenkinsci.plugins.workflow.cps.stages.StageStep

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
    }
}
