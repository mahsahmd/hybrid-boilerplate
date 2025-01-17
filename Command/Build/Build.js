import Build from './BuildModule.js';
import { generalConfigServer } from '../../Config/GeneralConfigServer.js';
import { ServiceWorkerBuilder } from './ServiceWorkerBuilder.js';

if(!process.env.NODE_ENV){
    process.env.NODE_ENV = generalConfigServer.env;
}
if(!process.env.APP_STAGE){
    process.env.APP_STAGE = generalConfigServer.appStage;
}

const build = new Build();
build.build(false);

