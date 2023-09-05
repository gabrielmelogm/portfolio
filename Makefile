setup-deploy-prod:
	echo "NEXT_PUBLIC_API_URL=\"$$API_URL\"" > .env.production
	echo "NEXT_PUBLIC_API_TOKEN=\"$$API_TOKEN\"" >> .env.production