<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Angel London" src="https://angellondon.co.uk/wp-content/themes/angel-starter-master/assets/svgs/angel-circle-black.svg" width="60" /> 
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Angel London X GatsbyJS
</h1>

The new Frontend UI for Angel London site, built in React using Gatsby.

To make a copy of the site, please follow the set up steps below.

## 🚀 Set up

1.  **Clone down repository and install packages.**

    If you have the gatsby cli installed you may skip this step.

    ```shell
    npm install -g gatsby-cli
    # The above command installs Gatsby CLI globally on your machine
    ```

2.  **Make sure you have Gatsby installed.**

    Clone down this repository into a directory of your choice, and move into the directory. After doing so install the apps dependencies

    ```shell
    # change directory
    cd angel-gatsby
    # run NPM install for required packages
    npm install
    ```

3.  **Running locally**

    Within `gatsby-config.js` on `line 33` is the `gatsby-source-wordpress` plugin.

    This plugin will control being able to scrap the Wordpress backend. Whilst running locally you need to ensure that `baseUrl` is pointing to a local Wordpress install url. On the line below, `protocol` will be either http or https, for local development you need to use http.

4.  **Gatsby Develop**
    To run the application after following the previous steps, simply run the command below.

    ```shell
      gatsby develop
    ```
    The site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._