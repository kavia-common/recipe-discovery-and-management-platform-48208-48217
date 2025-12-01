#!/bin/bash
cd /home/kavia/workspace/code-generation/recipe-discovery-and-management-platform-48208-48217/frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

