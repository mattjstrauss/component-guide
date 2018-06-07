<?php $language = file_get_contents(''.$languageExamples.'/css-example.php');  ?>

<div class="instructions">

	<p>This is the rule for single link css comments.</p>	

</div>

<pre><code class="language-<?php echo $languageName; ?>"><?php echo htmlspecialchars($language); ?></code></pre>