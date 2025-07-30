FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
  openjdk-11-jdk \
  git-core \
  gnupg \
  flex \
  bison \
  gperf \
  build-essential \
  zip \
  curl \
  zlib1g-dev \
  gcc-multilib \
  g++-multilib \
  libc6-dev-i386 \
  lib32ncurses5-dev \
  x11proto-core-dev \
  libx11-dev \
  lib32z-dev \
  libgl1-mesa-dev \
  libxml2-utils \
  xsltproc \
  unzip \
  fontconfig \
  python-is-python3 \
  rsync \
  ca-certificates \
  wget \
  sudo \
  nano \
  && apt-get clean


ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64


RUN useradd -m builder && echo "builder ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers
USER builder
WORKDIR /home/builder


CMD ["/bin/bash"]
