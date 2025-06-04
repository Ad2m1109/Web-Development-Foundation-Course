# HTML Basic Elements Reference

## Document Structure
```html
<!DOCTYPE html>         <!-- Declares HTML5 document -->
<html>                 <!-- Root element -->
<head>                 <!-- Contains metadata -->
<title>               <!-- Page title -->
<body>                <!-- Page content -->
```

## Text Elements
```html
<h1> to <h6>          <!-- Headings (largest to smallest) -->
<p>                   <!-- Paragraph -->
<br>                  <!-- Line break -->
<hr>                  <!-- Horizontal rule -->
<strong>              <!-- Strong importance (bold) -->
<em>                  <!-- Emphasized text (italic) -->
<mark>                <!-- Highlighted text -->
<span>                <!-- Inline container -->
```

## Links and Images
```html
<a href="url">        <!-- Hyperlink -->
<img src="url" alt="text">  <!-- Image -->
```

## Lists
```html
<ul>                  <!-- Unordered list -->
<ol>                  <!-- Ordered list -->
<li>                  <!-- List item -->
<dl>                  <!-- Description list -->
<dt>                  <!-- Description term -->
<dd>                  <!-- Description detail -->
```

## Tables
```html
<table>               <!-- Table -->
<tr>                  <!-- Table row -->
<th>                  <!-- Table header -->
<td>                  <!-- Table data -->
<thead>               <!-- Table head section -->
<tbody>               <!-- Table body section -->
<tfoot>               <!-- Table footer section -->
```

## Forms
```html
<form>                <!-- Form -->
<input>               <!-- Input field -->
<textarea>            <!-- Text area -->
<button>              <!-- Button -->
<select>              <!-- Dropdown list -->
<option>              <!-- Option in dropdown -->
<label>               <!-- Label for input -->
```

## Semantic Elements
```html
<header>              <!-- Header section -->
<nav>                 <!-- Navigation section -->
<main>                <!-- Main content -->
<article>             <!-- Independent content -->
<section>             <!-- Grouped content -->
<aside>               <!-- Sidebar content -->
<footer>              <!-- Footer section -->
```

## Media Elements
```html
<audio>               <!-- Audio content -->
<video>               <!-- Video content -->
<source>              <!-- Media resource -->
<track>               <!-- Text track for media -->
```

## Container Elements
```html
<div>                 <!-- Block-level container -->
<span>                <!-- Inline container -->
```

## Meta Information
```html
<meta>                <!-- Metadata -->
<link>                <!-- External resource -->
<style>               <!-- Internal CSS -->
<script>              <!-- JavaScript code -->
```

## Common Attributes
- `class`: Specifies CSS classes
- `id`: Unique identifier
- `style`: Inline CSS styles
- `title`: Additional information
- `lang`: Language
- `data-*`: Custom data attributes
- `aria-*`: Accessibility attributes

## Input Types
```html
<input type="text">        <!-- Text input -->
<input type="password">    <!-- Password input -->
<input type="number">      <!-- Number input -->
<input type="email">       <!-- Email input -->
<input type="checkbox">    <!-- Checkbox -->
<input type="radio">       <!-- Radio button -->
<input type="submit">      <!-- Submit button -->
<input type="reset">       <!-- Reset button -->
<input type="file">        <!-- File upload -->
<input type="date">        <!-- Date picker -->
```

## Accessibility Elements
```html
<main>                <!-- Main content of page -->
<article>             <!-- Self-contained content -->
<section>             <!-- Thematic grouping -->
<nav>                 <!-- Navigation links -->
<aside>               <!-- Sidebar content -->
<header>              <!-- Header content -->
<footer>              <!-- Footer content -->
<figure>              <!-- Self-contained content -->
<figcaption>          <!-- Caption for figure -->
<dialog>              <!-- Interactive component -->
```

## Interactive Elements
```html
<details>             <!-- Disclosure widget -->
<summary>             <!-- Summary/heading for details -->
<dialog>              <!-- Dialog box/modal -->
<menu>                <!-- Menu list -->
<menuitem>            <!-- Menu item -->
```

## HTML5 APIs
```html
<canvas>              <!-- Drawing graphics -->
<svg>                 <!-- Scalable vector graphics -->
<template>            <!-- Hidden content template -->
<slot>                <!-- Template placeholder -->
<output>              <!-- Calculation result -->
<progress>            <!-- Progress indicator -->
<meter>               <!-- Scalar measurement -->
```

## Additional Input Types
```html
<input type="color">      <!-- Color picker -->
<input type="range">      <!-- Range slider -->
<input type="search">     <!-- Search box -->
<input type="tel">        <!-- Telephone number -->
<input type="time">       <!-- Time picker -->
<input type="url">        <!-- URL input -->
<input type="week">       <!-- Week picker -->
<input type="month">      <!-- Month picker -->
<input type="datetime-local"> <!-- Date and time -->
```

## Form Validation Attributes
- `required`: Field must be filled
- `pattern`: Regex pattern
- `minlength`: Minimum length
- `maxlength`: Maximum length
- `min`: Minimum value
- `max`: Maximum value
- `step`: Number intervals
- `novalidate`: Disable validation
