<?php $molecule = file_get_contents('molecules/card-list-large.php');  ?>

<div class="component-wrapper">

	<div class="container">

		<div class="row">

			<div class="col-sm-4">
				<img src="http://placehold.it/375x375" alt="">
			</div>

			<div class="col-sm-8">

				<?php include 'molecules/card-list-large.php' ?>

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
					<p>Used on interior pages for large blocks of listed or bulleted content. The accompanying image can scale with the block and should generally be selected as something without a central focus. It should never appear with other listed content.</p>

					<p><em>Title color should be set to default at #eaeaea, selecting any of the four business line blocks should be optional. This can be changed by including .card-title to make sure the h4 is styled appropriately and .card-title-[RED, GREEN, BLUE or GOLD] to select the respective title color scheme.</em></p>

					<p>This component is based on a element called a "card". Modifier classes are applyed to the card element to apply certain styles. The "list-large" modifier used on the List component Featured is added to remove the bottom border from in between the list items. To adjust the the titles background and color use the card-title modilfier on the card element. To apply specific colors add a dash then the color name (card-title-red, card-title-blue, card-title-green, card-title-gold). By default its grey and black.</p>
				</div>

			</div>

		</div>

	</div>

</div>