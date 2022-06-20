FROM ruby:3.1.2

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# M1 macの場合に、 yarn installの際のnode-gypでなぜかpythonがインストールされず、エラーになるケースがあったので、明示的にaptでpythonも入れておく
RUN set -ex \
    && wget -qO- https://deb.nodesource.com/setup_17.x | bash - \
    && apt-get update \
    && apt-get install -y \
                 unzip \
                 nodejs \
                 vim \
                 --no-install-recommends \
    && rm -rf /var/lib/apt/lists/* \
    && gem install foreman \
    && npm install -g yarn esbuild

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

ENV LANG ja_JP.UTF-8
ENV HISTFILE=/usr/src/app/.bash_history

EXPOSE 3000
# rails sでbindするIPのデフォルトを0.0.0.0に
ENV BINDING=0.0.0.0

