<?php $language = file_get_contents(''.$languageExamples.'/php-example.php');  ?>

<div class="instructions">

	<p>This is the rule for single link php comments.</p>	

</div>

<pre><code class="language-<?php echo $languageName; ?>"><?php echo htmlspecialchars($language); ?></code></pre>