#!/bin/bash

hugo
rsync -aP --delete public/ username@hostname_ip:directory
rm -r public