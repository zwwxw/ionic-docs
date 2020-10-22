---
title: 'Testing &  QA'
previousText: 'Environments'
previousUrl: '/docs/appflow/tutorial/environments'
nextText: 'Explore more from Appflow'
nextUrl: '/docs/appflow/'
tableOfContents: true
---

Now that your App is ready, you need QA. Quality assurance involves testing and avoiding defects before releasing. In order to send an app out for user testing, on Android you can use internal track in Google playstore and for iOS you can to use TestFlight.

## iOS and TestFlight
Apple’s TestFlight is a service for sharing early release of an app with user.<br> From Apple:

> TestFlight makes it easy to invite users to test your apps and collect valuable feedback before you release them on the App Store. You can invite up to 10,000 testers using just their email address.

With TestFlight, we can take an early build of an app, and share it with a select group of users, and allow them to provide feedback on their experience. Since the app is compiled ahead of time, developers can test the full spectrum of native APIs and server requests and verify.

### Preparing a build for distribution

To use TestFlight you need an app build signed with distribution signing certificate.

Creating a distribution certificate and corresponding provisioning profile is similar to creating adevelopment certificate which we did in our [previous chapter](https://ionicframework.com/docs/appflow/package/credentials#ios-certificates) with few changes.

1. Select **iOS Distribution** while creating the [certificate](https://ionicframework.com/docs/appflow/package/credentials#certificate) this time.

![Appflow-distribution-certificate](/docs/assets/img/appflow/tutorial/distribution-certificate.png)

2. Select **Appstore** under **Distribution** while creating the [Provisioning Profile](https://ionicframework.com/docs/appflow/package/credentials#provisioning-profile) this time.

![Appflow-distribution-provisioning-profile](/docs/assets/img/appflow/tutorial/distribution-provisioning-profile.png)

With this you can now create a production signing certificate in Appflow Dashboard, similar to one we created in previous chapters and select Signing Certificate **Type** as `Production`.

### Deploy to Appstore

To be able to deploy your App build directly to Appstore or TestFlight from Appflow, you need to add Appstore connect as a [Destination](https://ionicframework.com/docs/appflow/destinations/destinations) in the Appflow Dashboard.

For this you need to create a new app in [Appstore connect](https://appstoreconnect.apple.com/apps) and then follow the guide to setup [Deploy to App Appstore](https://ionicframework.com/docs/appflow/destinations/apple)

### Distribution build and Deployment

You're now ready to build an production iOS app on Appflow! Trigger a new iOS native build just like you did earlier and include the production signing certificate you just created.

1. Select the commit.
2. Select Target Platform as `iOS - Xcode 11`.
3. Select the latest build Stack.
3. Build Type App Store.
4. Select the Signing Certificate you created earlier (ex: ios_distribution).
5. Enable the toggle to Appstore destination and Select the destination you created earlier.

![Appflow-dtas-ios-build](/docs/assets/img/appflow/tutorial/dtas-ios-build.png)

* Enabling Appstore destination before build would automatically deploy to the destination after a successful build.

* You can also manually deploy a build later using the deploy binary button from the **builds** tab.

You can see the deployment logs in the **Deploy>deployments** tab.

![Appflow-deployment-logs](/docs/assets/img/appflow/tutorial/deployment-logs.png)

### Inviting testers using TestFlight

Once, the deployment is successful in the Appflow Dashboard, you can see the same build show up in your Appstore connect account **starter app > TestFlight** tab.

![Appflow-appstore-testflight](/docs/assets/img/appflow/tutorial/appstore-testflight.png)

Now, you can invite internal testers from your Organization or add external testers using their email id.

Internal testers should be able to download your application via TestFlight. External users must wait until Apple approves the app for beta-testing. Refer [Distribute an app using TestFlight](https://help.apple.com/xcode/mac/9.3/#/dev2539d985f) for detailed steps.








## Android and Testing track

To test your android app you can make use of the [Testing tracks](https://support.google.com/googleplay/android-developer/answer/3131213?hl=en#:~:text=When%20you%20create%20an%20internal,the%20open%20or%20closed%20tracks.) in google Playstore and enable internal user testing.

### Deploy to Google Playstore

The Google Play destination allows you to upload your finished binaries to the [Google Play Console](https://developer.android.com/distribute/console) for Android, this way you can deploy your build .apk file directly to google Playstore.

> **Note:** The first upload for a new Android app <b>must</b> be uploaded from the Google Play Store website.

You can follow the guide to adding the [Google Playstore as a destination](https://ionicframework.com/docs/appflow/destinations/google) and set on of the internal testing tracks as destination.

### Release build and Deployment

You need a release build to deploy you Android build to Playstore, and a release build unlike a debug build requires Android security credentials. You can follow the guide to generate [Android Credentials](https://ionicframework.com/docs/appflow/package/credentials#android-certificates) to generate a keystore that can be used to sign your binary.

With the credentials you can now create a production signing certificate in Appflow Dashboard, similar to one we created in previous chapters and select Signing Certificate **Type** as `Production`.

You're now ready to build an production iOS app on Appflow! Trigger a new iOS native build just like you did earlier and including the production signing certificate you just created.

1. Select the commit.
2. Select Target Platform as `Android`.
3. Select the latest build Stack.
3. Build Type `Release`.
4. Select the Signing certificate you created earlier (ex: android_release).
5. Enable the Google playstore destination and Select the destination you created earlier.

* Enabling Appstore destination before build would automatically deploy to the destination after a successful build.

* You can also manually deploy a build later using the deploy binary button from the **builds** tab.

You can see deployment logs in the **Deploy>deployments** tab and select your latest android deployment.

### Additional notes

Alternatively, an android debug build can be directly distributed and installed on a device if needed.

This can be done only on devices with [debug mode enabled](https://ionicframework.com/docs/troubleshooting/debugging#android-and-chrome) and can be crucial in development cycle or for troubleshooting purposes.

 But, Testing with a Android debug build has limitations on how SSL certificates and Proguard being disabled by default.


## Live updates and Testing

When TestFlight or Android Testing track is used in combination with Appflow, Live updates can be delivered to the testers throughout the testing cycle by deploying Live updates to the corresponding channels.
This can be crucial to evaluate the live updates behavior and overall app experience.

The 3 Key steps involved in your Testing cycle are:

* Creating an initial native build of the app which is directly deployed to App Store for use with TestFlight
* Deploying Live updates to update the web components via Appflow as necessary.
* New build is only needed whenever a native component changes or the testing period has ended.
<br><br>

Congrats on completing the Exploring Appflow tutorial! You can explore the rest of Appflow's automation options [here](/docs/appflow).
