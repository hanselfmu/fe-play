var test=new BasicShaderPipelineTestScene("Shader Pipeline Test",[{id:"CelShading",lightingType:"LIGHTING_FRAGMENT_GEOMETRY",effectType:"EFFECT_CEL_SHADING",surfaceProperties:{ambience:new THREE.Vector3(.001,.001,.001),specularColorShininess:new THREE.Vector4(.1,.1,.1,64),lightColor:new THREE.Vector3(1,1,1)}},{id:"VertexLight",lightingType:"LIGHTING_VERTEX"},{id:"PixelLight",lightingType:"LIGHTING_FRAGMENT_GEOMETRY"},{id:"Bumpmapping",lightingType:"LIGHTING_FRAGMENT_BUMP"},{id:"Relief",lightingType:"LIGHTING_FRAGMENT_RELIEF"},{id:"Reflection",lightingType:"LIGHTING_FRAGMENT_GEOMETRY",effectType:"EFFECT_REFLECTION",surfaceProperties:{ambience:new THREE.Vector3(.6,.6,.8)}},{id:"Fresnel",lightingType:"LIGHTING_FRAGMENT_GEOMETRY",effectType:"EFFECT_FRESNEL",surfaceProperties:{ambience:new THREE.Vector3(.8,.6,.3),specularColorShininess:new THREE.Vector4(.2,.2,.2,1024)}}])