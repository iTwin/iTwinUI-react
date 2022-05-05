#!/bin/sh

yarn global add serve

# `&` is used to run the process in the background
serve apps/storybook/storybook-static --listen 6006 &
yarn workspace storybook cypress run "$@"
