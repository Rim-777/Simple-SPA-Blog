const webpack=  require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('../../webpack.config');
const host = 'localhost';
const port = 5000;



const server = new webpackDevServer(webpack(config), {
    hot: true,
    historyApiFallback: true,
    publicPath: config.output.publicPath,
    stats: {
        color: true
    }

});

server.listen(port, host, (err)=> {
    if(err)  console.log(err);
    console.log(`server started at ${host}:${port}`)
});