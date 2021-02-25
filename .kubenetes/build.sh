# !/bin/bash

echo $GCLOUD_SERVICE_KEY >> key.json

gcloud auth activate-service-account --key-file=key.json
gcloud config set project $GCLOUD_PROJECT
gcloud builds submit --tag gcr.io/$GCLOUD_PROJECT/frontend