setup-deploy-prod:
	echo "API_URL=\"$$API_URL\"" > .env.production
	echo "API_TOKEN=\"$$API_TOKEN\"" >> .env.production