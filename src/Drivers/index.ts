/**
 * @slynova/flydrive
 *
 * @license MIT
 * @copyright Slynova - Romain Lanz <romain.lanz@slynova.ch>
 */

import { AWSS3 } from './AWSS3';
import { GoogleCloudStorage } from './GoogleCloudStorage';
import { AliyunOSS } from './AliyunOSS';
import { LocalFileSystem } from './LocalFileSystem';

export default {
	s3: AWSS3,
	gcs: GoogleCloudStorage,
	oss: AliyunOSS,
	local: LocalFileSystem,
};
