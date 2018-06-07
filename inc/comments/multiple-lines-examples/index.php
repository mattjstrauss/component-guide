<?php

    $languagePath = "$commentType-examples/languages";
    $languageExamples = "$commentType-examples/languages/examples";

    if (count(glob($languagePath)) > "0" ) { 

?>

    <div id="tool-content" class="row">

        <div id="tool-sidebar" class="col-sm-3">

            <ul>

                <li>

                    <a href="#overview" class="active">Overview</a>

                </li>

                <?php foreach( glob( $languagePath.'/*.php' ) as $language ) : ?>

                    <?php $languageName = basename($language, ".php"); ?>

                    <?php if ( $languageName !== "index" ) { ?>
                            
                        <li>

                            <a href="#<?php echo $languageName ?>">

                                <?php $languageName = str_replace( '-', ' ', $languageName); ?>
                            
                                <?php echo ucwords( $languageName ); ?>

                            </a>

                        </li>

                    <?php }  ?>
                    
                <?php endforeach; ?>

            </ul>

        </div>

        <div id="tool-examples" class="col-sm-9">

            <?php foreach( glob( $languagePath.'/*.php' ) as $language ) : ?>

                <?php $languageName = basename($language, ".php"); ?>

                <?php if ( $languageName !== "index" ) { ?>

                    <div id="<?php echo $languageName; ?>" class="example-block">

                        <div class="row">

                            <div class="col-sm-12">

                                <?php $languageTitle = str_replace( '-', ' ', $languageName); ?>

                                <h3><?php echo ucwords( $languageTitle ); ?></h3>

                                <?php include($language); ?>

                            </div>

                        </div>

                    </div>

                <?php }  ?>
                
            <?php endforeach; ?>

        </div>

    </div>

<?php } ?>                                