---
title: Install the Feathers SDK (legacy AS3/Starling version)
layout: "docs.html"
sidebarTitle: Installation
---

The [Feathers SDK](/learn/as3-starling/sdk/) may be installed using the **Feathers SDK Manager**, an app designed to download both the SDK and all of its dependencies.

> Note: If you want to use a HARMAN build of the Adobe AIR SDK, start by using the Feathers SDK Manager to install AIR version 32.0. Then, follow the steps in [Overlay AIR SDK on Flex SDK](https://web.archive.org/web/20220828204002/https://helpx.adobe.com/x-productkb/multi/how-overlay-air-sdk-flex-sdk.html) to manually update to the newer AIR SDK.

![](/learn/as3-starling/sdk/images/feathers-sdk-manager-screenshot@2x.png)

1. Download the installer for the Feathers SDK Manager for either Windows or macOS.

    <div class="alignCenter">
      <div class="btn-wrapper">
        <a class="btn" href="https://github.com/feathersui/feathersui-starling-sdk-manager/releases/download/v1.2.3/FeathersSDKManagerInstaller-1.2.3.exe" onClick="_gaq.push(['_trackEvent', 'Downloads', 'SDKManagerWin', '1.2.3']);">Download Windows</a>
        <a class="btn" href="https://github.com/feathersui/feathersui-starling-sdk-manager/releases/download/v1.2.3/FeathersSDKManagerInstaller-1.2.3.pkg" onClick="_gaq.push(['_trackEvent', 'Downloads', 'SDKManagerMac', '1.2.3']);">Download macOS</a>
      </div>
    </div>

2. Run the installer and follow the steps in the wizard.

3. Run the **Feathers SDK Manager** application that you just installed.

4. Choose the version of the Feathers SDK to install. Click **Next**.

5. Choose the versions of the Adobe AIR and Adobe Flash Player to target. Click **Next**.

6. Choose an empty directory where the Feathers SDK should be installed. Click **Next**.

7. Agree to the licenses for the Feathers SDK and each of its dependencies. Click **Next**.

8. The Feathers SDK Manager will download the required files, and then it will configure the SDK for your system. This process may require several minutes.

## Next steps

From here, you should take a look at the instructions for adding the Feathers SDK to your favorite development environment.

- [Create a project in Adobe Flash Builder](./flash-builder.md)
- [Create a project in IntelliJ IDEA](./intellij-idea.md)
- [Create a project Visual Studio Code](./visual-studio-code.md)
