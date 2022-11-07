#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

import { WebsiteStack } from '../lib/WebsiteStack';

const app = new cdk.App();

const GLOBALS = {
  bucketName: 'frenchconcessionwebsitebucket',
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
  domainName: 'french-concession.com.au',
};

const websiteStack = new WebsiteStack(app, 'WebsiteStack', {
  ...GLOBALS,
});



