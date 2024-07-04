pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/EssaiIntlTest.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install dependencies
                sh 'npm ci'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                // Run Cypress tests
                sh 'npx cypress run'
            }
        }
    }

    post {
        success {
            echo 'Cypress tests succeeded!'
        }
        failure {
            echo 'Cypress tests failed!'
        }
    }
}
