cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-x-socialsharing.SocialSharing",
        "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
        "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "id": "at.modalog.cordova.plugin.html2pdf.Html2pdf",
        "file": "plugins/at.modalog.cordova.plugin.html2pdf/www/Html2pdf.js",
        "pluginId": "at.modalog.cordova.plugin.html2pdf",
        "clobbers": [
            "html2pdf"
        ]
    },
    {
        "id": "com.html2pdf.generator.pdf",
        "file": "plugins/com.html2pdf.generator/www/pdf.js",
        "pluginId": "com.html2pdf.generator",
        "clobbers": [
            "pdf"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-uniquedeviceid.UniqueDeviceID",
        "file": "plugins/cordova-plugin-uniquedeviceid/www/uniqueid.js",
        "pluginId": "cordova-plugin-uniquedeviceid",
        "merges": [
            "window.plugins.uniqueDeviceID"
        ]
    },
    {
        "id": "cordova-plugin-camera.Camera",
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "id": "cordova-plugin-camera.camera",
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "id": "cordova-plugin-camera.CameraPopoverHandle",
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-x-socialsharing": "5.1.3",
    "at.modalog.cordova.plugin.html2pdf": "2.0.0",
    "com.html2pdf.generator": "0.7.0",
    "cordova-plugin-splashscreen": "3.1.0",
    "cordova-plugin-device": "1.1.3",
    "cordova-plugin-uniquedeviceid": "1.3.1",
    "cordova-plugin-camera": "2.1.1",
    "cordova-plugin-whitelist": "1.3.0"
};
// BOTTOM OF METADATA
});