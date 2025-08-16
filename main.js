
page_height
page_width
notes_string

:extractMusic
:a searchIndex :reasonableStart;
:a searchEnd :widthLimit;
:a end2 :heightLimit;
:a index2 :reasonableStart;
:a blackPortion 0
:a previousPortion 0
:a countPortions 0
:a fiveStart 0
:i :firstGreater searchIndex searchEnd;
::i :firstGreater end2 index2;
:::i :isBlack searchIndex index2;
::::a blackPortion :addNumbers blackPortion 1;
::::a searchIndex :addNumbers searchIndex 1;
:::i :firstGreater blackPortion 0;
::::i :areSame previousPortion 0;
:::::a previousPortion blackPortion
:::::a blackPortion 0
:::::a fiveStart index2
::::i :portionsClose previousPortion blackPortion;
:::::a countPortions :addNumbers countPortions 1;
:::::a previousPortion 0
:::::i :areSame countPortions 4;
::::::a fiveHeight :differenceNumbers index2 fiveStart;
::::::i :probablyMusic fiveHeight blackPortion fiveStart;
:::::::extractNotes fiveStart fiveHeight
:::::::a fiveHeight 0
::::::a countPortions 0
::::a previousPortion blackPortion
::::a blackPortion 0
:::a searchIndex :addNumbers searchIndex 1; 
::a searchIndex :addNumbers searchIndex 1;
:orderNotes
:e notes_string

:extractNotes barsStart barsHeight
:

:orderNotes
:

// simple functions to fill in . . .

:alreadyFound yTop
:

:probablyMusic barsHeight lineHeight startY
:i :areSame barsHeight 0;
::e false
:i :alreadyFound startY;
::e false
:

:portionsClose portion1 portion2
:i :areSame portion1 0;
::e false
:

:heightLimit
:

:widthLimit
:

:reasonableStart
:

:isBlack xPosition yPosition
:

:isWhite xPosition yPosition
:
