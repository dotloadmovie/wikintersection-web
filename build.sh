echo "beginning UI build"
cd ui/wikintersect
npm install
npm run build
node deploy.js

echo "merging built UI into static paths"
mv build static
cp -R static ../../
cd ../../
cp static/index.html public/views/index.html

echo "build server"
go build main.go

echo "complete"
exit 1