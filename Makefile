setup-deploy-prod:
	echo -e "API_URL=\"$$API_URL\"\nAPI_TOKEN=\"$$API_TOKEN\"" > .env.production