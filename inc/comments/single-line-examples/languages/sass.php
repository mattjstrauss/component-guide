<?php $language = file_get_contents(''.$languageExamples.'/sass-example.php');  ?>

<div class="instructions">

	<p>This is the rule for single link sass comments.</p>	

</div>

<pre><code class="language-<?php echo $languageName; ?>"><?php echo htmlspecialchars($language); ?></code></pre>