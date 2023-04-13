cp package.json knexfile.js Dockerfile .dockerignore build/
cp -R migrations build/migrations
cd build
npm install --only=production
