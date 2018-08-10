#!/bin/bash
yarn run build
scp -r dist/* root@wintc.top:/home/lushg/vue-widget
