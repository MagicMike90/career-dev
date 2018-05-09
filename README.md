   volumes:
      - ./:/usr/src/app
      - /usr/src/app/node_modules # This will mount the node_modules directory to the host machine using the buildtime directory.
