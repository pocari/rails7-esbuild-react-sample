#!/bin/bash

set -ex

bundle install --system

exec ${BASH_SOURCE%/*}/start_server.sh

