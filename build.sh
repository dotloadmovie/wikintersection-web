cd ui/wikintersect
npm install
npm run build
node deploy.js

mv build static
cp -R static ../../
cd ../../
cp static/index.html public/views/index.html

go build main.go

exit 1