import generalConfig from '../../Config/GeneralConfigServer.js';
if(!process.env.NODE_ENV){
    process.env.NODE_ENV = generalConfig.env;
}
if(!process.env.APP_STAGE){
    process.env.APP_STAGE = generalConfig.appStage;
}
console.log('=================='+process.env.NODE_ENV+'-'+process.env.APP_STAGE+'=============================');
import express from 'express';
import StaticsRoutes from'./StaticRoutes.js';
import PageRoutes from './PageRoutes.js';
import cookieParser from 'cookie-parser';


var app = express();
app.use(cookieParser());
var staticRoutes = new StaticsRoutes(app,generalConfig);
var pageRoutes = new PageRoutes(app,generalConfig);
staticRoutes.init();
pageRoutes.init();
app.listen(generalConfig.port, generalConfig.host, function(){
    console.info('server is running on: http://localhost:'+generalConfig.port);
});
export default app;
