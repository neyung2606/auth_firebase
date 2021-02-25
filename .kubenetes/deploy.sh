# !/bin/bash

echo $GCLOUD_SERVICE_KEY >> key.json

gcloud auth activate-service-account  --key-file=key.json
gcloud config set project $GCLOUD_PROJECT

gcloud container clusters get-credentials $GCLOUD_KUBENETES_CLUSTER --zone $GCLOUD_ZONE
kubectl delete -f .kubenetes/deployment.yaml
kubectl create -f .kubenetes/deployment.yaml
