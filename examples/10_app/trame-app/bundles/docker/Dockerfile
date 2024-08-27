FROM kitware/trame:py3.9

RUN install -d -o trame-user -g trame-user /deploy
RUN apt update -y && apt install -y libosmesa6-dev

ARG PV_URL='https://www.paraview.org/files/v5.11/ParaView-5.11.0-osmesa-MPI-Linux-Python3.9-x86_64.tar.gz'
RUN mkdir -p /opt/paraview && cd /opt/paraview && wget -qO- $PV_URL | tar --strip-components=1 -xzv
ENV TRAME_PARAVIEW=/opt/paraview

# Copy the server directory
COPY --chown=trame-user:trame-user ./server /deploy/server
