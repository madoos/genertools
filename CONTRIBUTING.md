# Conventions

* All sub-generators are added to the generators folder with a separate name by '-' .
* If the sub generator has to add scripts or overwrite the package.json the file containing this information has to be called
  extend.json
* By default the main generator lists the sub generators and adds them as an option in the selection of questions

# Structure

```bash
package.json
+--generators
    +--some-generator
        +--index.js
        +--templates
        +--extend.json
```
