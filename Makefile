setup-deploy-prod:
	rm .env && \
	echo -e "API_URL=\"$$API_URL\"\nAPI_TOKEN=\"$$API_TOKEN\"" > .env.production