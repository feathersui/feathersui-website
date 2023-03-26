---
title: Build the Feathers SDK from a Binary Distribution (Starling version)
layout: "docs.html"
sidebarTitle: Build SDK from Binary Distribution
---

The document explains how to build the Feathers SDK from a binary distribution. The build process downloads the Adobe AIR SDK, _playerglobal.swc_, and some font embedding utilities from the Adobe Flex SDK that are not open source. When finished, the Feathers SDK will be ready to use with a supported IDE.

> Most developers should use the [Feathers SDK Manager](./installation-instructions.md) instead. This tutorial is meant for advanced developers who want to modify the Feathers SDK compiler source code to contribute or to create a fork.

## Requirements

- A _binary distribution_ of the Feathers SDK [(available from Github)](https://github.com/feathersui/feathersui-starling-sdk/releases)
- [Apache Ant](http://ant.apache.org) 1.9.1 or newer
- Java 8 update 101 or newer

## Build Steps

1.  Extract the Feathers SDK binary distribution into a directory.

1.  In the Feathers SDK directory, run the following command:

        ant -f installer.xml

1.  When prompted to install each dependency, type `y` and press Enter.

That's it! The Feathers SDK may now be used with Flash Builder 4.7 and other supported IDEs.

## Troubleshooting

Some versions of Java do not support the level of encryption used on the servers that provide some the Feathers dependencies. You may encounter the following error message:

```code
javax.net.ssl.SSLHandshakeException: Received fatal alert: handshake_failure
	at sun.security.ssl.Alerts.getSSLException(Alerts.java:192)
	at sun.security.ssl.Alerts.getSSLException(Alerts.java:154)
	at sun.security.ssl.SSLSocketImpl.recvAlert(SSLSocketImpl.java:2023)
	at sun.security.ssl.SSLSocketImpl.readRecord(SSLSocketImpl.java:1125)
	at sun.security.ssl.SSLSocketImpl.performInitialHandshake(SSLSocketImpl.java:1375)
	at sun.security.ssl.SSLSocketImpl.startHandshake(SSLSocketImpl.java:1403)
	at sun.security.ssl.SSLSocketImpl.startHandshake(SSLSocketImpl.java:1387)
	at sun.net.www.protocol.https.HttpsClient.afterConnect(HttpsClient.java:559)
	at sun.net.www.protocol.https.AbstractDelegateHttpsURLConnection.connect(AbstractDelegateHttpsURLConnection.java:185)
	at sun.net.www.protocol.https.HttpsURLConnectionImpl.connect(HttpsURLConnectionImpl.java:153)
	at org.apache.tools.ant.taskdefs.Get$GetThread.openConnection(Get.java:690)
	at org.apache.tools.ant.taskdefs.Get$GetThread.openConnection(Get.java:715)
	at org.apache.tools.ant.taskdefs.Get$GetThread.get(Get.java:606)
	at org.apache.tools.ant.taskdefs.Get$GetThread.run(Get.java:596)
```

To fix this issue, you must download and install the [Java Cryptography Extension (JCE) Unlimited Strength Jurisdiction Policy Files](http://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html).
