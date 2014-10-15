#modgrid (BETA)#

##A responsive front end grid system for html pages.##

modgrid provides a 12 column grid layout as well as standard formatting for semantic html.

****

###Usage###

Link to modgrid’s **modgrid.css** and **modgrid.js** files from your web page and mark up your html by referring to example.php or to the documentation below.

****

###Documentation###

###Head###

Include the meta viewport tag to ensure pages render appropriately on all screen sizes. Include a link to modgrid's modgrid.css file.

```html
<head>
    <title>modgrid</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="css" href="/css/modgrid.css">
</head>
```

###Content###

The page's main content must be contained in an mgcontent div.

```html
<div class=“mgcontent”>
    <!-- Main Content -->
</div>
```

###Groups and Boxes###

Boxes are individual boxes of content within an mgbox classed div. All Boxes must be contained within an mggroup div. An mggroup can contain one box or all boxes on a page. It allows for better grouping of content as needed.

```html
<div class=“mggroup">
    <div class="mgbox lg-3 med-6">
        <p>Lorem Ipsum</p>
    </div>
    <div class="mgbox lg-3 med-6">
        <p>Lorem Ipsum</p>
    </div>
    <div class="mgbox lg-3 med-6">
        <p>Lorem Ipsum</p>
    </div>
    <div class="mgbox lg-3 med-6">
        <p>Lorem Ipsum</p>
    </div>
</div>
```

###12 Column Grid System###

modgrid has breakpoints for small, medium and large screens. To establish a layout for each case use the lg- and med- classes for boxes. If neither class is set the box will be the full width of the enclosing div. You specify the number of columns a post should take up by appending a number to the classes like lg-6 for 6 columns on large screens.

In the example below there will be a row of 4 boxes on large screens (3 columns + 3 columns + 3 columns + 3 columns = 12 columns) and a row of 2 boxes on medium screens (6 columns + 6 columns = 12 columns). The heights of all boxes in the same row will be equalized, based on the tallest content, automatically.

*Big thanks to [Zurb's Foundation Framework](http://foundation.zurb.com/ "Zurb's Foundation Framework") for the inspiration behind the 12 column grid format. I recommend taking a look at Foundation if you have not yet and are interested in front end frameworks.*

```html
<div class=“mggroup”>
    <div class=“mgbox lg-3 med-6">
        <p>Lorem Ipsum</p>
    </div>
    <div class="mgbox lg-3 med-6">
        <p>Lorem Ipsum</p>
    </div>
    <div class="mgbox lg-3 med-6">
        <p>Lorem Ipsum</p>
    </div>
    <div class="mgbox lg-3 med-6">
        <p>Lorem Ipsum</p>
    </div>
</div>
```

###Forms###

Form content should use fieldset and label tags to ensure appropriate formatting.

```html
<form method="post" action="/">
    <fieldset>
        <label for="name">Name</label>
        <input type="text" name="name">
    </fieldset>
    <fieldset>
        <input type="submit" value="submit">
    </fieldset>
</form>
```

###Footer###

Place a link to JQuery followed by a link modgrid’s modgrid.js file right before the closing body tag.

```html

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript" src="/js/modgrid.js"></script>

</body>
</html>
```