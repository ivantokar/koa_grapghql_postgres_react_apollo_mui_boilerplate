#!/usr/bin/env bash
lsof -n -i4TCP:5001 | grep LISTEN | tr -s ' ' | cut -f 2 -d ' ' | xargs kill -9
