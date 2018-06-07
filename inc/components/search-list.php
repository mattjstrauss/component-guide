<?php $molecule = file_get_contents('molecules/search-list.php');  ?>

<div class="component-wrapper">

	<div class="container">

		<div class="row">

			<div class="col-sm-12">

				<?php include 'molecules/search-list.php'; ?>

			</div>

		</div>

		<span class="spacer spacer-md-3"></span>

		<div class="row">
			<div class="col-sm-12">
				<h2>Markup</h2>
				<pre><code class="language-html"><?php echo htmlspecialchars($molecule); ?></code></pre>
			</div>
		</div>

		<div class="row">

			<div class="col-sm-12">
				
				<div class="component-rules">
					
					<p>Search results should always be displayed between both the search header bar (Results Form), and pagination (Pagination) should it be needed. Ideally no more than 10 results would be displayed on any one page. </p>

				</div>

			</div>

		</div>

	</div>

</div>