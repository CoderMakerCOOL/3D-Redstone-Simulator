const worldData = `mcworld-js112132112129112133113129112133114129112133115129112134116129112134117129112134118129112134119129112134120129112134121129112134122129112134123129112133124129112133125129112132126129112132127129112132128129112131129129112131130129112131131129112131132129112131133129112131134129112131135129112131136129112131137129112131138129112131139129112131140129112132141129112132142129112132143129113133112129113133113129113134114129113134115129113134116129113134117129113134118129113134119129113134120129113134121129113134122129113134123129113134124129113133125129113133126129113132127129113132128129113132129129113131130129113131131129113131132129113131133129113131134129113131135129113131136129113131137129113131138129113132139129113132140129113132141129113132142129113132143129114134112129114134113129114134114129114134115129114135116129114135117129114135118129114135119129114135120129114134121129114134122129114134123129114134124129114133125129114133126129114133127129114132128129114132129129114132130129114131131129114131132129114131133129114131134129114132135129114132136129114132137129114132138129114132139129114132140129114133141129114133142129114133143129115134112129115135113129115135114129115135115129115135116129115135117129115135118129115135119129115135120129115135121129115134122129115134123129115134124129115134125129115133126129115133127129115132128129115132129129115132130129115132131129115132132129115132133129115132134129115132135129115132136129115132137129115133138129115133139129115133140129115133141129115133142129115133143129116135112129116135113129116135114129116135115129116135116129116135117129116135118129116135119129116135120129116135121129116134122129116134123129116134124129116133125129116133126129116133127129116132128129116132129129116132130129116132131129116132132129116132133129116132134129116133135129116133136129116133137129116134138129116134139129116134140129116134141129116134142129116134143129117135112129117135113129117135114129117135115129117135116129117135117129117135118129117135119129117135120129117135121129117134122129117134123129117134124129117133125129117133126129117132127129117132128129117132129129117132130129117132131129117132132129117133133129117133134129117133135129117134136129117134137129117135138129117135139129117135140129117135141129117135142129117134143129118135112129118135113129118135114129118135115129118135116129118135117129118135118129118135119129118135120129118134121129118134122129118134123129118133124129118133125129118132126129118131127129118131128129118130129129118131129129118131130129118131131129118132132129118133133129118134134129118134135129118135136129118135137129118136138129118136139129118136140129118136141129118135142129118135143129119135112129119135113129119135114129119135115129119135116129119135117129119135118129119135119129119134120129119134121129119134122129119133123129119132124129119133124129119131125129119132125129119130126129119131126129119130127129119129128129119130128129119129129129119129130129119130130129119130131129119131132129119132132129119133133129119134133129119135134129119135135129119136136129119136137129119136138129119136139129119136140129119136141129119136142129119135143129120135112129120135113129120135114129120135115129120135116129120135117129120135118129120134119129120134120129120134121129120133122129120132123129120131124129120130125129120129126129120129127129120128128129120128129129120128130129120129131129120130132129120131132129120132133129120133133129120134133129120135134129120136135129120136136129120136137129120136138129120137139129120137140129120136141129120136142129120136143129121135112129121135113129121135114129121135115129121135116129121135117129121134118129121134119129121133120129121133121129121132122129121131123129121130124129121129125129121128126129121128127129121128128129121128129129121128130129121128131129121129132129121130133129121131133129121132133129121133133129121134133129121135134129121136135129121136136129121136137129121137138129121137139129121137140129121136141129121136142129121136143129122135112129122135113129122135114129122135115129122135116129122134117129122134118129122133119129122133120129122132121129122131122129122130123129122129124129122128125129122128126129122128127129122128128129122128129129122128130129122128131129122128132129122129133129122130133129122131133129122132133129122133133129122134133129122135134129122136135129122136136129122136137129122136138129122137139129122137140129122136141129122136142129122136143129123134112129123135113129123135114129123135115129123134116129123134117129123133118129123133119129123132120129123131121129123130122129123129123129123128124129123128125129123128126129123128127129123128128129123128129129123128130129123128131129123128132129123129133129123130133129123131133129123132133129123133133129123134134129123135134129123135135129123136136129123136137129123136138129123136139129123136140129123136141129123136142129123136143129124134112129124135113129124135114129124135115129124134116129124134117129124133118129124132119129124131120129124130121129124129122129124128123129124128124129124128125129124128126129124128127129124128128129124128129129124128130129124128131129124128132129124129133129124130133129124131133129124132134129124133134129124134134129124135135129124135136129124136137129124136138129124136139129124136140129124136141129124136142129124136143129125134112129125134113129125135114129125134115129125134116129125133117129125132118129125131119129125130120129125129121129125129122129125128123129125128124129125128125129125128126129125128127129125128128129125128129129125128130129125128131129125128132129125129133129125130133129125131134129125132134129125133134129125134134129125135135129125135136129125135137129125136138129125136139129125136140129125136141129125136142129125136143129126134112129126134113129126134114129126134115129126134116129126132117129126133117129126131118129126130119129126129120129126129121129126128122129126128123129126128124129126128125129126128126129126128127129126128128129126128129129126128130129126128131129126128132129126129133129126130134129126131134129126132134129126133134129126134135129126135136129126135137129126135138129126136139129126136140129126136141129126136142129126136143129127134112129127134113129127134114129127134115129127132116129127133116129127131117129127130118129127129119129127128120129127128121129127128122129127128123129127128124129127128125129127128126129127128127129127128128129127128129129127128130129127128131129127128132129127128133129127129134129127130134129127131134129127132134129127133135129127134136129127134137129127135138129127135139129127135140129127135141129127135142129127135143129128133112129128133113129128133114129128132115129128133115129128131116129128130117129128129118129128128119129128128120129128128121129128128122129128128123129128128124129128128125129128128126129128128127129128128128129128128129129128128130129128128131129128128132129128128133129128129134129128130134129128131135129128132135129128132136129128133136129128133137129128134137129128134138129128134139129128135140129128135141129128135142129128135143129129133112129129133113129129132114129129131115129129130116129129129117129129128118129129128119129129128120129129128121129129128122129129128123129129128124129129128125129129128126129129128127129129128128129129128129129129128130129129128131129129128132129129128133129129128134129129129135129129130135129129131136129129132137129129133138129129133139129129134140129129134141129129134142129129134143129130132112129130132113129130131114129130130115129130129116129130128117129130128118129130128119129130128120129130128121129130128122129130128123129130128124129130128125129130128126129130128127129130128128129130128129129130128130129130128131129130128132129130128133129130128134129130129135129130130136129130131137129130132138129130132139129130133140129130133141129130133142129130133143129131131112129131131113129131130114129131129115129131129116129131128117129131128118129131128119129131128120129131128121129131128122129131128123129131128124129131128125129131128126129131128127129131128128129131128129129131128130129131128131129131128132129131128133129131128134129131128135129131129136129131130137129131131138129131131139129131132140129131132141129131132142129131132143129132131112129132130113129132130114129132129115129132128116129132128117129132128118129132128119129132128120129132128121129132128122129132128123129132128124129132128125129132128126129132128127129132128128129132128129129132128130129132128131129132128132129132128133129132128134129132128135129132128136129132129137129132130138129132131139129132131140129132131141129132131142129132131143129133130112129133130113129133130114129133129115129133128116129133128117129133128118129133128119129133128120129133128121129133128122129133128123129133128124129133128125129133128126129133128127129133128128129133128129129133128130129133128131129133128132129133128133129133128134129133128135129133128136129133129137129133129138129133130139129133130140129133130141129133130142129133130143129134130112129134130113129134129114129134129115129134128116129134128117129134128118129134128119129134128120129134128121129134128122129134128123129134128124129134128125129134128126129134128127129134128128129134128129129134128130129134128131129134128132129134128133129134128134129134128135129134128136129134129137129134129138129134130139129134130140129134130141129134130142129134130143129135130112129135130113129135130114129135129115129135129116129135128117129135128118129135128119129135128120129135128121129135128122129135128123129135128124129135128125129135128126129135128127129135128128129135128129129135128130129135128131129135128132129135128133129135128134129135128135129135128136129135129137129135129138129135130139129135130140129135130141129135130142129135129143129136130112129136130113129136130114129136130115129136130116129136129117129136129118129136128119129136128120129136128121129136128122129136128123129136128124129136128125129136128126129136128127129136128128129136128129129136128130129136128131129136128132129136128133129136128134129136128135129136128136129136129137129136129138129136130139129136130140129136130141129136130142129136129143129137131112129137131113129137131114129137131115129137130116129137130117129137130118129137129119129137128120129137128121129137128122129137128123129137128124129137128125129137128126129137128127129137128128129137128129129137128130129137128131129137128132129137128133129137128134129137128135129137129136129137129137129137130138129137130139129137130140129137130141129137130142129137129143129138131112129138131113129138131114129138131115129138131116129138131117129138130118129138130119129138129120129138128121129138128122129138128123129138128124129138128125129138128126129138128127129138128128129138128129129138128130129138128131129138128132129138128133129138128134129138129135129138129136129138130137129138130138129138131139129138131140129138130141129138130142129138130143129139131112129139132113129139132114129139132115129139132116129139132117129139131118129139131119129139130120129139129121129139128122129139128123129139128124129139128125129139128126129139128127129139128128129139128129129139128130129139128131129139128132129139128133129139129134129139129135129139130136129139130137129139131138129139131139129139131140129139131141129139131142129139130143129140131112129140132113129140132114129140132115129140132116129140132117129140132118129140131119129140130120129140130121129140129122129140128123129140128124129140128125129140128126129140128127129140128128129140128129129140128130129140128131129140128132129140128133129140129134129140130135129140130136129140131137129140131138129140131139129140131140129140131141129140131142129140131143129141132112129141132113129141132114129141133115129141133116129141132117129141132118129141132119129141131120129141130121129141130122129141129123129141128124129141128125129141128126129141128127129141128128129141128129129141128130129141128131129141128132129141129133129141130134129141131135129141131136129141132137129141132138129141132139129141132140129141132141129141131142129141131143129142132112129142132113129142133114129142133115129142133116129142133117129142132118129142132119129142131120129142131121129142130122129142130123129142129124129142128125129142128126129142128127129142128128129142128129129142128130129142128131129142129132129142130133129142131134129142131135129142132136129142132137129142132138129142133139129142132140129142132141129142132142129142131143129143132112129143132113129143133114129143133115129143133116129143133117129143133118129143132119129143132120129143131121129143131122129143130123129143129124129143129125129143128126129143128127129143128128129143128129129143128130129143129131129143130132129143131133129143132134129143132135129143133136129143133137129143133138129143133139129143133140129143133141129143132142129143132143129`;
