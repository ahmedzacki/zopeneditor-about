(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{435:function(e,t,s){"use strict";s.r(t);var a=s(33),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"setting-file-associations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-file-associations"}},[e._v("#")]),e._v(" Setting file associations")]),e._v(" "),s("h2",{attrs:{id:"local-file-associations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-file-associations"}},[e._v("#")]),e._v(" Local file associations")]),e._v(" "),s("h3",{attrs:{id:"adding-more-file-associations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-more-file-associations"}},[e._v("#")]),e._v(" Adding more file associations")]),e._v(" "),s("p",[e._v("IBM Z Open Editor registers itself in VS Code with support for several languages. For each language it also defines a set of file extensions that by default will be mapped to the registered languages as shown in the table below.")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[e._v("Language")]),e._v(" "),s("th",[e._v("VS Code Language ID")]),e._v(" "),s("th",[e._v("Default File Extensions")])])]),e._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[e._v("Enterprise COBOL")]),e._v(" "),s("td",[e._v("cobol")]),e._v(" "),s("td",[e._v(".cbl .cpy .cob .copy .copybook .cobol .cobcopy")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[e._v("Enterrise PL/I")]),e._v(" "),s("td",[e._v("pl1")]),e._v(" "),s("td",[e._v(".pli .pl1 .pc .pci .plinc .pcx .inc .include")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[e._v("Z High Level Assembler")]),e._v(" "),s("td",[e._v("hlasm")]),e._v(" "),s("td",[e._v(".s .assemble .asm .hla .hlasm")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[e._v("JCL")]),e._v(" "),s("td",[e._v("jcl")]),e._v(" "),s("td",[e._v(".jcl .cntl .proc")])])])]),e._v(" "),s("p",[e._v("When you open a file with one of these extensions in Z Open Editor then VS Code will display the mapped language in the language selector on the bottom-right of the status bar. You can click this bar to temporarily switch the open editor to any other language available in VS Code.")]),e._v(" "),s("p",[e._v("If you want to use a different file extension in addition to these for any of these languages then you can define them yourself in the user or workspace settings.")]),e._v(" "),s("ul",[s("li",[e._v("Open the Preferences editor and switch to either user or workspace settings. Workspace settings would be useful to define the mappings locally to the current project and store it in SCM with your programs.")]),e._v(" "),s("li",[e._v("In the Search bar at the top type "),s("code",[e._v("associations")]),e._v(".")]),e._v(" "),s("li",[e._v('This will bring up the VS Code "Files: Associations" setting that contains a list of the current non-default file associations defined. The default associations shown in the table above are not listed here as they cannot be changed.')]),e._v(" "),s("li",[e._v('Click the Add Item button to add another entry. It will prompt for a "Key", which is the file extension starting with the symbols '),s("code",[e._v("*.")]),e._v(" such as "),s("code",[e._v("*.cp1")]),e._v(' and a "Value" entry that is the language identifier as listed in the table above.')])]),e._v(" "),s("p",[e._v("As an alternative to using the VS Code Preferences UI you can also edit the JSON of the user or workspace settings file. The format would be")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"files.associations"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"*.cp1"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"cobol"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("The format of the key is very flexible as you can enter a full GLOB pattern here allowing you to map files to a language by not only using file extensions, but arbitrary substring mappings as well. This ability will be used for remote file mappings as described further below.")]),e._v(" "),s("p",[e._v("Note, if you remove some of the entries there that were added by Z Open Editor at startup such as "),s("code",[e._v('"*.COBOL*": "cobol",')]),e._v(" and save, they might reappear afterwards. To prevent that see the details below on managing remote file associations that cause this behavior.")]),e._v(" "),s("h3",{attrs:{id:"defining-include-file-associations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defining-include-file-associations"}},[e._v("#")]),e._v(" Defining Include file associations")]),e._v(" "),s("p",[e._v("On the page "),s("RouterLink",{attrs:{to:"/Docs/setting_propertygroup.html"}},[e._v("Setting property groups")]),e._v(" we described how you can define so-called Property Groups that tell Z Open Editor where to look for include files such as COBOL Copybooks. These include files can be located on the local file system or could be in remote MVS data sets. If you store them locally then another set of default file extensions exist for identifying a valid include file for each language. You can find the default sets of include file extensions in the Settings as well and use these to customize your own file extensions to be used. Without a valid file extension Z Open Editor will not be able to find include files and not open them correctly for editing as well.")],1),e._v(" "),s("ul",[s("li",[e._v("Open the Preferences editor and switch to either user or workspace settings. Workspace settings would be useful to define the mapping locally to the current project and store it in SCM with your programs.")]),e._v(" "),s("li",[e._v('On the left of Settings editor expand the "Extensions" group and select the entry "IBM Z Open Editor".')]),e._v(" "),s("li",[e._v("Scroll on the right to see all the different Z Open Editor settings available. There are three settings available for configuring include file extensions:\n"),s("ul",[s("li",[e._v("Cobol: Include File Extensions")]),e._v(" "),s("li",[e._v("Hlasm: Include File Extensions")]),e._v(" "),s("li",[e._v("Pl1: Include File Extensions")])])]),e._v(" "),s("li",[e._v("Each shows a list of the currently registered file extensions populated with a set of defaults.")]),e._v(" "),s("li",[e._v("You can now add new extensions to the list.")]),e._v(" "),s("li",[e._v("Click the Add Item button and you can enter the extension with a leading dot-character such as "),s("code",[e._v(".cp1")]),e._v(".")]),e._v(" "),s("li",[e._v("Once you entered a new extension and save you will see that your new extension has also been added automatically to the "),s("code",[e._v("files.associations")]),e._v(" setting that was discussed above.")]),e._v(" "),s("li",[e._v("If you remove an extension from the list then Z Open Editor will not currently remove it form the "),s("code",[e._v("files.associations")]),e._v(" however. You have to remove it there yourself.")])]),e._v(" "),s("p",[e._v("Once configured, Z Open Editor will now find include files with these new extensions in the locations specified with your Property Groups. When you open these files, they will also be correctly opened in the editor as include files for the assigned language. This also means for COBOL and PL/I the files will be correctly parsed as include files and not full program files. See "),s("RouterLink",{attrs:{to:"/Docs/knownissues.html#language-specific-features-and-limitations"}},[e._v("here")]),e._v(" for more details on the specific differences.")],1),e._v(" "),s("h2",{attrs:{id:"remote-file-associations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remote-file-associations"}},[e._v("#")]),e._v(" Remote file associations")]),e._v(" "),s("p",[e._v("IBM Z Open Editor integrates with and provides advanced capabilities for Zowe Explorer to edit program files from remote z/OS locations. You can,for example, find your COBOL programs in Zowe Explorer's MVS explorer and the open them directly from there for editing in Z Open Editor. As MVS data sets do not have file extensions, which are essential for VS Code to identify the language of file opened in the editor, Z Open Editor gives you special settings and capabilities to configure the editor for MVS.")]),e._v(" "),s("p",[e._v("Within the family of "),s("code",[e._v("zopeneditor.datasets")]),e._v(" VS Code settings defined by Z Open Editor, you can specify patterns for MVS data set names that should contain COBOL, PL/I, or HLASM programs, copybooks, includes, and JCL. This means that when you open members of these data sets using Zowe Explorer in the editor, they shall be considered the designated type of file. This is accomplished in Z Open Editor by allowing you to specify name patterns that are then mapped to VS Code "),s("code",[e._v("files.associations")]),e._v(" settings as described above for local files as well. To edit these name patterns or add to them you use the VS Code Preferences editor.")]),e._v(" "),s("ul",[s("li",[e._v("Open the Preferences editor and switch to either user or workspace settings. Workspace settings would be useful to define the mapping locally to the current project and store it in SCM with your programs.")]),e._v(" "),s("li",[e._v('On the left of Settings editor expand the "Extensions" group and select the entry "IBM Z Open Editor".')]),e._v(" "),s("li",[e._v("Scroll on the right to see all the different Z Open Editor settings available. There are four settings available for configuring data set names:\n"),s("ul",[s("li",[e._v("Datasets: Cobol Datasets")]),e._v(" "),s("li",[e._v("Datasets: Hlasm Datasets")]),e._v(" "),s("li",[e._v("Datasets: Jcl Datasets")]),e._v(" "),s("li",[e._v("Datasets: Pl1 Datasets")])])]),e._v(" "),s("li",[e._v("Each shows a list of the currently registered names populated with a set of defaults.")]),e._v(" "),s("li",[e._v("You can now add new name pattern to the list by clicking the Add Item button. As you see in the list of defaults, it is a good idea to include dots to make the mappings to MVS data set names less ambiguous.")]),e._v(" "),s("li",[e._v("Once you entered a new entry and save you will see that your new name has also been added with an additional "),s("code",[e._v("*")]),e._v(" wildcard at the end automatically to the "),s("code",[e._v("files.associations")]),e._v(" setting that was discussed above.")]),e._v(" "),s("li",[e._v("If you remove a entry from the list then Z Open Editor will not currently remove it form the "),s("code",[e._v("files.associations")]),e._v(" however. You have to remove it there yourself afterwards.")])]),e._v(" "),s("p",[e._v("Also note, that before you be able to remove any of the mappings from the "),s("code",[e._v("files.associations")]),e._v(" you need to remove them first from the "),s("code",[e._v("datasets")]),e._v(" as well as "),s("code",[e._v("includeFileExtensions")]),e._v(" settings first as Z Open Editor tries to automatically add its settings into the associations to enable its features.")]),e._v(" "),s("p",[e._v("You can also edit all these settings directly in the JSON settings files.")]),e._v(" "),s("p",[e._v("The result of these settings now is, for example, when you open any member of "),s("code",[e._v("IBMUSER.SAMPLE.COBOL")]),e._v(" in MVS, the content of the member is opened in a COBOL editor, and likewise for PL/I, HLASM, and JCL. When opening files the editor will follow the following rules.")]),e._v(" "),s("p",[s("strong",[e._v("Rule 1")]),e._v(": By default, members in the COBOL data set that end with "),s("code",[e._v(".COBOL")]),e._v(", "),s("code",[e._v(".COBCOPY")]),e._v(", or "),s("code",[e._v(".COPYBOOK")]),e._v(" are supposed to be COBOL, COPYBOOKs, or COBCOPY. Members in the PL/I data set that end with "),s("code",[e._v(".PLI")]),e._v(", "),s("code",[e._v(".PLINC")]),e._v(", or "),s("code",[e._v(".INCLUDE")]),e._v(" are supposed to be PL/I, PLINC, or INCLUDES.  Members in the HLASM data set that end with "),s("code",[e._v(".ASM")]),e._v(" are supposed to be HLASM.  If your team or company uses COPYBOOK data sets for HLASM copymembers, you can move those settings from "),s("code",[e._v("cobolDatasets")]),e._v(" to the "),s("code",[e._v("hlasmDatasets")]),e._v(" parameter.")]),e._v(" "),s("p",[s("strong",[e._v("Rule 2")]),e._v(": The data sets are listed in a mapping "),s("code",[e._v("files.associations")]),e._v(" in the preferences.")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"zopeneditor.datasets.cobolDatasets"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('".COBOL"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('".COB"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('".COBCOPY"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('".COPYBOOK"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('".COPY"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"zopeneditor.datasets.jclDatasets"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('".JCL"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"zopeneditor.datasets.pl1Datasets"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('".PL1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('".PLI"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('".INC"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('".INCLUDE"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"zopeneditor.datasets.hlasmDatasets"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('".ASM"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),s("p",[e._v("Alternatively, you can directly specify an array of associations instead of using the "),s("code",[e._v('"zopeneditor.dataset"')]),e._v(" property above. For example,")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"files.associations"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"*.COBOL*"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"cobol"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"*.COB*"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"cobol"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"*.COBCOPY*"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"cobol"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"*.COPYBOOK*"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"cobol"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"*.COPY*"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"cobol"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"*.PL1*"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"pl1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"*.PLI*"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"pl1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"*.INC*"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"pl1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"*.INCLUDE*"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"pl1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"*.JCL*"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"jcl"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"*.ASM*"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hlasm"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("Again, if you prefer COPYBOOK data sets be opened as "),s("code",[e._v("hlasm")]),e._v(" data sets, you can designate that in this setting.")]),e._v(" "),s("p",[e._v("Such a setting is used to recognize any file name, including data set and member names, which contain the noted strings as the appropriate type of file.")]),e._v(" "),s("p",[e._v("Using this setting, you can navigate to the path specified, and see a downloaded copy of all remote files edited via the Zowe VS Code extension.")]),e._v(" "),s("p",[s("strong",[e._v("Note")]),e._v(": All file temps are deleted on startup and shutdown.")])])}),[],!1,null,null,null);t.default=n.exports}}]);