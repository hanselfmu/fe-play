function guiChanged() {
  if (1 != this.uniformsSetFromGUI) {
    this.uniformsSetFromGUI = !0
    var e = instance.robot_uniform_control, s = instance.moonlight_uniform_control, l = instance.lpos1,
      n = instance.lpos2, a = instance.lpos3, t = instance.pl1_uniform_control, o = instance.pl2_uniform_control,
      r = instance.pl3_uniform_control, i = instance.concrete_uniform_control, _ = instance.props_uniform_control,
      u = instance.mat1_uniform_control, p = instance.mat2_uniform_control, m = instance.mat3_uniform_control,
      c = instance.mat4_uniform_control, h = instance.transp_decal_uniform_control,
      d = instance.emissive_uniform_control, v = instance.rain_uniform_control, M = instance.pp_bloom_control,
      f = instance.pp_dof_control, g = instance.instance_bulb_uniform_control,
      I = instance.instance_outer_uniform_control, b = instance.generic_material_control
    instance.deferred_shader_compositor.setLightAmbient(s.Ambient), instance.deferred_shader_compositor.changeLight(0, new THREE.Vector3(t.X, t.Y, t.Z), t.Intensity, t.Ambient, t.Inner, t.Outer), instance.deferred_shader_compositor.changeLight(1, new THREE.Vector3(o.X, o.Y, o.Z), o.Intensity, o.Ambient, o.Inner, o.Outer), instance.deferred_shader_compositor.changeLight(2, new THREE.Vector3(r.X, r.Y, r.Z), r.Intensity, r.Ambient, r.Inner, r.Outer), instance.deferred_shader_compositor.setLampColors(new THREE.Vector3(t.Color[0] / 255, t.Color[1] / 255, t.Color[2] / 255), new THREE.Vector3(o.Color[0] / 255, o.Color[1] / 255, o.Color[2] / 255), new THREE.Vector3(r.Color[0] / 255, r.Color[1] / 255, r.Color[2] / 255)), instance.mlcolor.set(s.Color[0] / 255, s.Color[1] / 255, s.Color[2] / 255)
    var O = instance.robot_material.uniforms
    instance.deferred_shader_compositor.setMoonLightReference(instance.mlpos, instance.mldir, instance.mlcolor, s.Sharpness, s.Spread, s.Intensity), O.mat_base_metal.value = e.Base_Metalness, O.mat_overall_metallness.value = e.Overall_Metalness, O.mat_metalmap_contr.value = e.MetalMap_Influence, O.mat_base_gloss.value = e.Base_Gloss, O.mat_glossiness.value = e.Overall_Glossiness, O.mat_gloss_contr.value = e.Roughness_Map_Influence, O.specular_albedo.value.set(e.Albedo[0] / 255, e.Albedo[1] / 255, e.Albedo[2] / 255), O.light_color.value.set(s.Color[0] / 255, s.Color[1] / 255, s.Color[2] / 255), O.light_intensity.value = s.Intensity, O.light_ambient.value = s.Ambient, O.moon_light_sharpness.value = s.Sharpness, O.moon_light_spread.value = s.Spread, O.pl_pos.value[0].set(l.x, l.y, l.z), O.pl_color.value[0].set(t.Color[0] / 255, t.Color[1] / 255, t.Color[2] / 255), O.pl_ambient.value[0] = t.Ambient, O.pl_inner.value[0] = t.Inner, O.pl_outer.value[0] = t.Outer, O.pl_intensity.value[0] = t.Intensity, O.pl_pos.value[1].set(n.x, n.y, n.z), O.pl_color.value[1].set(o.Color[0] / 255, o.Color[1] / 255, o.Color[2] / 255), O.pl_ambient.value[1] = o.Ambient, O.pl_inner.value[1] = o.Inner, O.pl_outer.value[1] = o.Outer, O.pl_intensity.value[1] = o.Intensity, O.pl_pos.value[2].set(a.x, a.y, a.z), O.pl_color.value[2].set(r.Color[0] / 255, r.Color[1] / 255, r.Color[2] / 255), O.pl_ambient.value[2] = r.Ambient, O.pl_inner.value[2] = r.Inner, O.pl_outer.value[2] = r.Outer, O.pl_intensity.value[2] = r.Intensity, O.drop_size.value = e.RainDropSize, O.shadow_strength.value = s.Shadow, O = instance.concrete_material.uniforms, O.mat_base_metal.value = i.Base_Metalness, O.mat_overall_metallness.value = i.Overall_Metalness, O.mat_metalmap_contr.value = i.MetalMap_Influence, O.mat_base_gloss.value = i.Base_Gloss, O.mat_glossiness.value = i.Overall_Glossiness, O.mat_gloss_contr.value = i.Roughness_Map_Influence, O.specular_albedo.value.set(i.Albedo[0] / 255, i.Albedo[1] / 255, i.Albedo[2] / 255), O.light_color.value.set(s.Color[0] / 255, s.Color[1] / 255, s.Color[2] / 255), O.light_intensity.value = s.Intensity, O.light_ambient.value = s.Ambient, O.moon_light_sharpness.value = s.Sharpness, O.moon_light_spread.value = s.Spread, O.pl_pos.value[0].set(l.x, l.y, l.z), O.pl_color.value[0].set(t.Color[0] / 255, t.Color[1] / 255, t.Color[2] / 255), O.pl_ambient.value[0] = t.Ambient, O.pl_inner.value[0] = t.Inner, O.pl_outer.value[0] = t.Outer, O.pl_intensity.value[0] = t.Intensity, O.pl_pos.value[1].set(n.x, n.y, n.z), O.pl_color.value[1].set(o.Color[0] / 255, o.Color[1] / 255, o.Color[2] / 255), O.pl_ambient.value[1] = o.Ambient, O.pl_inner.value[1] = o.Inner, O.pl_outer.value[1] = o.Outer, O.pl_intensity.value[1] = o.Intensity, O.pl_pos.value[2].set(a.x, a.y, a.z), O.pl_color.value[2].set(r.Color[0] / 255, r.Color[1] / 255, r.Color[2] / 255), O.pl_ambient.value[2] = r.Ambient, O.pl_inner.value[2] = r.Inner, O.pl_outer.value[2] = r.Outer, O.pl_intensity.value[2] = r.Intensity, O.shadow_strength.value = s.Shadow, O = instance.props_material.uniforms, O.mat_base_metal.value = _.Base_Metalness, O.mat_overall_metallness.value = _.Overall_Metalness, O.mat_metalmap_contr.value = _.MetalMap_Influence, O.mat_base_gloss.value = _.Base_Gloss, O.mat_glossiness.value = _.Overall_Glossiness, O.mat_gloss_contr.value = _.Roughness_Map_Influence, O.specular_albedo.value.set(_.Albedo[0] / 255, _.Albedo[1] / 255, _.Albedo[2] / 255), O.light_color.value.set(s.Color[0] / 255, s.Color[1] / 255, s.Color[2] / 255), O.light_intensity.value = s.Intensity, O.light_ambient.value = s.Ambient, O.moon_light_sharpness.value = s.Sharpness, O.moon_light_spread.value = s.Spread, O.pl_pos.value[0].set(l.x, l.y, l.z), O.pl_color.value[0].set(t.Color[0] / 255, t.Color[1] / 255, t.Color[2] / 255), O.pl_ambient.value[0] = t.Ambient, O.pl_inner.value[0] = t.Inner, O.pl_outer.value[0] = t.Outer, O.pl_intensity.value[0] = t.Intensity, O.pl_pos.value[1].set(n.x, n.y, n.z), O.pl_color.value[1].set(o.Color[0] / 255, o.Color[1] / 255, o.Color[2] / 255), O.pl_ambient.value[1] = o.Ambient, O.pl_inner.value[1] = o.Inner, O.pl_outer.value[1] = o.Outer, O.pl_intensity.value[1] = o.Intensity, O.pl_pos.value[2].set(a.x, a.y, a.z), O.pl_color.value[2].set(r.Color[0] / 255, r.Color[1] / 255, r.Color[2] / 255), O.pl_ambient.value[2] = r.Ambient, O.pl_inner.value[2] = r.Inner, O.pl_outer.value[2] = r.Outer, O.pl_intensity.value[2] = r.Intensity, O.shadow_strength.value = s.Shadow, O = instance.mat1_material.uniforms, O.mat_base_metal.value = u.Base_Metalness, O.mat_overall_metallness.value = u.Overall_Metalness, O.mat_metalmap_contr.value = u.MetalMap_Influence,O.mat_base_gloss.value = u.Base_Gloss,O.mat_glossiness.value = u.Overall_Glossiness,O.mat_gloss_contr.value = u.Roughness_Map_Influence,O.specular_albedo.value.set(u.Albedo[0] / 255, u.Albedo[1] / 255, u.Albedo[2] / 255),O.light_color.value.set(s.Color[0] / 255, s.Color[1] / 255, s.Color[2] / 255),O.light_intensity.value = s.Intensity,O.light_ambient.value = s.Ambient,O.moon_light_sharpness.value = s.Sharpness,O.moon_light_spread.value = s.Spread,O.shadow_strength.value = s.Shadow,O = instance.mat2_material.uniforms,O.mat_base_metal.value = p.Base_Metalness,O.mat_overall_metallness.value = p.Overall_Metalness,O.mat_metalmap_contr.value = p.MetalMap_Influence,O.mat_base_gloss.value = p.Base_Gloss,O.mat_glossiness.value = p.Overall_Glossiness,O.mat_gloss_contr.value = p.Roughness_Map_Influence,O.specular_albedo.value.set(p.Albedo[0] / 255, p.Albedo[1] / 255, p.Albedo[2] / 255),O.light_color.value.set(s.Color[0] / 255, s.Color[1] / 255, s.Color[2] / 255),O.light_intensity.value = s.Intensity,O.light_ambient.value = s.Ambient,O.moon_light_sharpness.value = s.Sharpness,O.moon_light_spread.value = s.Spread,O.shadow_strength.value = s.Shadow,O = instance.mat3_material.uniforms,O.mat_base_metal.value = m.Base_Metalness,O.mat_overall_metallness.value = m.Overall_Metalness,O.mat_metalmap_contr.value = m.MetalMap_Influence,O.mat_base_gloss.value = m.Base_Gloss,O.mat_glossiness.value = m.Overall_Glossiness,O.mat_gloss_contr.value = m.Roughness_Map_Influence,O.specular_albedo.value.set(m.Albedo[0] / 255, m.Albedo[1] / 255, m.Albedo[2] / 255),O.light_color.value.set(s.Color[0] / 255, s.Color[1] / 255, s.Color[2] / 255),O.light_intensity.value = s.Intensity,O.light_ambient.value = s.Ambient,O.moon_light_sharpness.value = s.Sharpness,O.moon_light_spread.value = s.Spread,O.shadow_strength.value = s.Shadow,O = instance.mat4_material.uniforms,O.mat_base_metal.value = c.Base_Metalness,O.mat_overall_metallness.value = c.Overall_Metalness,O.mat_metalmap_contr.value = c.MetalMap_Influence,O.mat_base_gloss.value = c.Base_Gloss,O.mat_glossiness.value = c.Overall_Glossiness,O.mat_gloss_contr.value = c.Roughness_Map_Influence,O.specular_albedo.value.set(c.Albedo[0] / 255, c.Albedo[1] / 255, c.Albedo[2] / 255),O.light_color.value.set(s.Color[0] / 255, s.Color[1] / 255, s.Color[2] / 255),O.light_intensity.value = s.Intensity,O.light_ambient.value = s.Ambient,O.moon_light_sharpness.value = s.Sharpness,O.moon_light_spread.value = s.Spread,O.shadow_strength.value = s.Shadow,O = instance.transp_decal_material.uniforms,O.mat_specularity.value = h.Specularity,O.mat_glossiness.value = h.Glossiness,O.light_color.value.set(s.Color[0] / 255, s.Color[1] / 255, s.Color[2] / 255),O.light_intensity.value = s.Intensity,O.light_ambient.value = s.Ambient,O.moon_light_sharpness.value = s.Sharpness,O.moon_light_spread.value = s.Spread,O.pl_pos.value[0].set(t.X, t.Y, t.Z),O.pl_color.value[0].set(t.Color[0] / 255, t.Color[1] / 255, t.Color[2] / 255),O.pl_ambient.value[0] = t.Ambient,O.pl_inner.value[0] = t.Inner,O.pl_outer.value[0] = t.Outer,O.pl_intensity.value[0] = t.Intensity,O.pl_pos.value[1].set(o.X, o.Y, o.Z),O.pl_color.value[1].set(o.Color[0] / 255, o.Color[1] / 255, o.Color[2] / 255),O.pl_ambient.value[1] = o.Ambient,O.pl_inner.value[1] = o.Inner,O.pl_outer.value[1] = o.Outer,O.pl_intensity.value[1] = o.Intensity,O.pl_pos.value[2].set(r.X, r.Y, r.Z),O.pl_color.value[2].set(r.Color[0] / 255, r.Color[1] / 255, r.Color[2] / 255),O.pl_ambient.value[2] = r.Ambient,O.pl_inner.value[2] = r.Inner,O.pl_outer.value[2] = r.Outer,O.pl_intensity.value[2] = r.Intensity,O.shadow_strength.value = s.Shadow,O = instance.generic_material.uniforms,O.diffuseColor.value.set(b.Color[0] / 255, b.Color[1] / 255, b.Color[2] / 255),O.materialParams.value.set(b.MaterialParamsX, b.MaterialParamsY, b.MaterialParamsZ),O = instance.emissive_material.uniforms,O.emission.value.set(d.Emission[0] / 255, d.Emission[1] / 255, d.Emission[2] / 255),O = instance.instance_bulb_material.uniforms,O.emission.value.set(g.Emission[0] / 255, g.Emission[1] / 255, g.Emission[2] / 255),O = instance.instance_outer_material.uniforms,O.color.value.set(I.color[0] / 255, I.color[1] / 255, I.color[2] / 255),O.material_params.value.set(I.shadow, I.gloss, I.metalness),instance.deferred_shader_compositor.setInstanceLightColor(new THREE.Vector3(g.LightColor[0] / 255, g.LightColor[1] / 255, g.LightColor[2] / 255)),O = instance.particle_material.uniforms,O.drop_color.value.set(v.Color[0] / 255, v.Color[1] / 255, v.Color[2] / 255),instance.particle_material.size = v.Size,O.contrast.value = v.Contrast,O.strength.value = v.SpecStrength
    var y = instance.compositor.getEffect(CompositorEffects.Bloom)
    y.setBlurSigma(M.GlowSize), y.setLuminanceValues(M.LuminanceCutoff, M.LuminanceMultiplier), instance.current_camera.fov = s.FOV, instance.current_camera.updateProjectionMatrix()
    var C = instance.compositor.getEffect(CompositorEffects.DepthOfField)
    C.setupDOFParameters(f.NormalizedFocusWidth, f.Aperture), instance.particle_material.needsUpdate = !0, instance.generic_material.needsUpdate = !0, instance.emissive_material.needsUpdate = !0, instance.transp_decal_material.needsUpdate = !0, instance.props_material.needsUpdate = !0, instance.robot_material.needsUpdate = !0, instance.instance_bulb_material.needsUpdate = !0, instance.instance_outer_material.needsUpdate = !0, instance.generic_material.needsUpdate = !0
  }
}

function initGUI() {
  var e = instance.robot_uniform_control, s = instance.moonlight_uniform_control,
    l = (instance.lpos1, instance.lpos2, instance.lpos3, instance.pl1_uniform_control),
    n = instance.pl2_uniform_control, a = instance.pl3_uniform_control, t = instance.concrete_uniform_control,
    o = instance.props_uniform_control, r = instance.mat1_uniform_control, i = instance.mat2_uniform_control,
    _ = instance.mat3_uniform_control, u = instance.mat4_uniform_control, p = instance.transp_decal_uniform_control,
    m = instance.emissive_uniform_control, c = instance.rain_uniform_control, h = instance.pp_bloom_control,
    d = instance.pp_dof_control, v = instance.instance_bulb_uniform_control,
    M = instance.instance_outer_uniform_control, f = instance.generic_material_control, g = new dat.GUI({
      load: {
        preset: "test24",
        remembered: {
          Default: {
            0: {
              Color: [83, 133, 143],
              Intensity: 2,
              Ambient: .25,
              Sharpness: 4,
              Spread: 1024,
              X: .3,
              Y: 1,
              Z: -.05
            },
            1: {Color: [158, 96, 46], Intensity: 1, Ambient: .1, Inner: 0, Outer: 5, X: 3, Y: 1, Z: 0},
            2: {Color: [158, 96, 46], Intensity: 1, Ambient: .1, Inner: 0, Outer: 5, X: 0, Y: 1, Z: 0},
            3: {Color: [158, 96, 46], Intensity: 1, Ambient: .1, Inner: 0, Outer: 5, X: -3, Y: 1, Z: 0},
            4: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            6: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: .3, Glossiness: .5},
            12: {Emission: [255, 255, 255]}
          },
          test1: {
            0: {
              Color: [83, 133, 143],
              Intensity: 2,
              Ambient: .25,
              Sharpness: 4,
              Spread: 1024,
              X: .3,
              Y: 1,
              Z: -.05
            },
            1: {Color: [160, 60, 60], Intensity: 1, Ambient: .1, Inner: 0, Outer: 5, X: 3, Y: 1, Z: 0},
            2: {Color: [60, 160, 60], Intensity: 1, Ambient: .1, Inner: 0, Outer: 5, X: 0, Y: 1, Z: 0},
            3: {Color: [60, 60, 160], Intensity: 1, Ambient: .1, Inner: 0, Outer: 5, X: -3, Y: 1, Z: 0},
            4: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            6: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: .3, Glossiness: .5},
            12: {Emission: [255, 255, 255]}
          },
          test2: {
            0: {
              Color: [83, 133, 143],
              Intensity: 2,
              Ambient: .25,
              Sharpness: 4,
              Spread: 1024,
              X: .3,
              Y: 1,
              Z: -.05
            },
            1: {
              Color: [162.5, 106.27162629757785, 43.01470588235293],
              Intensity: 6.617266930897811,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: -5.884887127347923,
              Y: 4.041013268998796,
              Z: -10.296398414613137
            },
            2: {Color: [60, 160, 60], Intensity: 1, Ambient: .1, Inner: 0, Outer: 5, X: 0, Y: 1, Z: 0},
            3: {Color: [60, 60, 160], Intensity: 1, Ambient: .1, Inner: 0, Outer: 5, X: -3, Y: 1, Z: 0},
            4: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            6: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: .3, Glossiness: .5},
            12: {Emission: [255, 255, 255]}
          },
          test3: {
            0: {
              Color: [83, 133, 143],
              Intensity: 2,
              Ambient: .25,
              Sharpness: 4,
              Spread: 1024,
              X: .3,
              Y: 1,
              Z: -.05
            },
            1: {
              Color: [162.5, 106.27162629757785, 43.01470588235293],
              Intensity: 6.617266930897811,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: -5.884887127347923,
              Y: 4.041013268998796,
              Z: -10.296398414613137
            },
            2: {
              Color: [60, 160, 60],
              Intensity: 4.301223505083577,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: 13.966913665345515,
              Y: 6.3,
              Z: 1.8352576253661965
            },
            3: {Color: [60, 60, 160], Intensity: 1, Ambient: .1, Inner: 0, Outer: 5, X: -3, Y: 1, Z: 0},
            4: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            6: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: .3, Glossiness: .5},
            12: {Emission: [255, 255, 255]}
          },
          test4: {
            0: {
              Color: [83, 133, 143],
              Intensity: 2,
              Ambient: .25,
              Sharpness: 4,
              Spread: 1024,
              X: .3,
              Y: 1,
              Z: -.05
            },
            1: {
              Color: [162.5, 106.27162629757785, 43.01470588235293],
              Intensity: 6.617266930897811,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: -5.884887127347923,
              Y: 4.041013268998796,
              Z: -10.296398414613137
            },
            2: {
              Color: [60, 160, 60],
              Intensity: 4.301223505083577,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: 13.966913665345515,
              Y: 6.3,
              Z: 1.8352576253661965
            },
            3: {Color: [60, 60, 160], Intensity: 1, Ambient: .1, Inner: 0, Outer: 5, X: -3, Y: 1, Z: 0},
            4: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            6: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: .3, Glossiness: .5},
            12: {Emission: [255, 255, 255]}
          },
          test5: {
            0: {
              Color: [83, 133, 143],
              Intensity: 2,
              Ambient: .25,
              Sharpness: 4,
              Spread: 1024,
              X: .3,
              Y: 1,
              Z: -.05
            },
            1: {
              Color: [162.5, 106.27162629757785, 43.01470588235293],
              Intensity: 6.617266930897811,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: -5.884887127347923,
              Y: 4.041013268998796,
              Z: -10.296398414613137
            },
            2: {
              Color: [60, 160, 60],
              Intensity: 4.301223505083577,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: 13.966913665345515,
              Y: 6.3,
              Z: 1.8352576253661965
            },
            3: {Color: [160, 112.94117647058823, 60], Intensity: 1, Ambient: .1, Inner: 0, Outer: 5, X: -3, Y: 1, Z: 0},
            4: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            6: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: .3, Glossiness: .5},
            12: {Emission: [255, 255, 255]}
          },
          test6: {
            0: {
              Color: [83, 133, 143],
              Intensity: 2,
              Ambient: .25,
              Sharpness: 4,
              Spread: 1024,
              X: .3,
              Y: 1,
              Z: -.05
            },
            1: {
              Color: [162.5, 106.27162629757785, 43.01470588235293],
              Intensity: 6.617266930897811,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: -5.884887127347923,
              Y: 4.041013268998796,
              Z: -10.296398414613137
            },
            2: {
              Color: [60, 160, 60],
              Intensity: 4.301223505083577,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: 13.966913665345515,
              Y: 6.3,
              Z: 1.8352576253661965
            },
            3: {Color: [160, 112.94117647058823, 60], Intensity: 1, Ambient: .1, Inner: 0, Outer: 5, X: -3, Y: 1, Z: 0},
            4: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            6: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: .3, Glossiness: .5},
            12: {Emission: [255, 255, 255]}
          },
          test: {
            0: {Color: [83, 133, 143], Intensity: 2, Ambient: .25, Sharpness: 4, Spread: 1024, X: .3, Y: 1, Z: -.05},
            1: {
              Color: [162.5, 106.27162629757785, 43.01470588235293],
              Intensity: 6.617266930897811,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: -5.884887127347923,
              Y: 4.041013268998796,
              Z: -10.296398414613137
            },
            2: {
              Color: [60, 160, 60],
              Intensity: 4.301223505083577,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: 13.966913665345515,
              Y: 6.3,
              Z: 1.8352576253661965
            },
            3: {Color: [160, 112.94117647058823, 60], Intensity: 1, Ambient: .1, Inner: 0, Outer: 5, X: -3, Y: 1, Z: 0},
            4: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            6: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: .3, Glossiness: .5},
            12: {Emission: [255, 255, 255]}
          },
          test7: {
            0: {
              Color: [83, 133, 143],
              Intensity: 2,
              Ambient: .25,
              Sharpness: 4,
              Spread: 1024,
              X: .3,
              Y: 1,
              Z: -.05
            },
            1: {
              Color: [162.5, 106.27162629757785, 43.01470588235293],
              Intensity: 6.617266930897811,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: -5.884887127347923,
              Y: 4.041013268998796,
              Z: -10.296398414613137
            },
            2: {
              Color: [60, 160, 60],
              Intensity: 4.301223505083577,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: 13.966913665345515,
              Y: 6.3,
              Z: 1.8352576253661965
            },
            3: {Color: [160, 112.94117647058823, 60], Intensity: 1, Ambient: .1, Inner: 0, Outer: 5, X: -3, Y: 1, Z: 0},
            4: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            6: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: .3, Glossiness: .5},
            12: {Emission: [255, 255, 255]}
          },
          test8: {
            0: {
              Color: [83, 133, 143],
              Intensity: 2,
              Ambient: .25,
              Sharpness: 4,
              Spread: 1024,
              X: .3,
              Y: 1,
              Z: -.05
            },
            1: {
              Color: [162.5, 106.27162629757785, 43.01470588235293],
              Intensity: 6.617266930897811,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: -5.884887127347923,
              Y: 4.041013268998796,
              Z: -10.296398414613137
            },
            2: {
              Color: [60, 160, 60],
              Intensity: 4.301223505083577,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: 13.966913665345515,
              Y: 6.3,
              Z: 1.8352576253661965
            },
            3: {Color: [160, 112.94117647058823, 60], Intensity: 1, Ambient: .1, Inner: 0, Outer: 5, X: -3, Y: 1, Z: 0},
            4: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            6: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: .3, Glossiness: .5},
            12: {Emission: [255, 255, 255]}
          },
          test9: {
            0: {
              Color: [83, 133, 143],
              Intensity: 2,
              Ambient: .25,
              Sharpness: 4,
              Spread: 1024,
              X: .3,
              Y: 1,
              Z: -.05
            },
            1: {
              Color: [162.5, 106.27162629757785, 43.01470588235293],
              Intensity: 6.617266930897811,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: -5.884887127347923,
              Y: 4.041013268998796,
              Z: -10.296398414613137
            },
            2: {
              Color: [60, 160, 60],
              Intensity: 4.301223505083577,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: 13.966913665345515,
              Y: 6.3,
              Z: 1.8352576253661965
            },
            3: {Color: [160, 112.94117647058823, 60], Intensity: 1, Ambient: .1, Inner: 0, Outer: 5, X: -3, Y: 1, Z: 0},
            4: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            6: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: .3, Glossiness: .5},
            12: {Emission: [255, 255, 255]}
          },
          test10: {
            0: {
              Color: [83, 133, 143],
              Intensity: 2,
              Ambient: .25,
              Sharpness: 4,
              Spread: 1024,
              X: .3,
              Y: 1,
              Z: -.05
            },
            1: {
              Color: [162.5, 106.27162629757785, 43.01470588235293],
              Intensity: 6.617266930897811,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: -5.884887127347923,
              Y: 4.041013268998796,
              Z: -10.296398414613137
            },
            2: {
              Color: [60, 160, 60],
              Intensity: 4.301223505083577,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: 13.966913665345515,
              Y: 6.3,
              Z: 1.8352576253661965
            },
            3: {Color: [160, 112.94117647058823, 60], Intensity: 1, Ambient: .1, Inner: 0, Outer: 5, X: -3, Y: 1, Z: 0},
            4: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            6: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: .3, Glossiness: .5},
            12: {Emission: [255, 255, 255]}
          },
          test11: {
            0: {
              Color: [83, 133, 143],
              Intensity: 2,
              Ambient: .25,
              Sharpness: 4,
              Spread: 1024,
              X: .3,
              Y: 1,
              Z: -.05
            },
            1: {
              Color: [162.5, 106.27162629757785, 43.01470588235293],
              Intensity: 6.617266930897811,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: -5.884887127347923,
              Y: 4.041013268998796,
              Z: -10.296398414613137
            },
            2: {
              Color: [212.5, 155.88235294117644, 52.08333333333334],
              Intensity: 3.8600723763570564,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: 13.966913665345515,
              Y: 6.3,
              Z: 1.8352576253661965
            },
            3: {Color: [160, 112.94117647058823, 60], Intensity: 1, Ambient: .1, Inner: 0, Outer: 5, X: -3, Y: 1, Z: 0},
            4: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            6: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: .3, Glossiness: .5},
            12: {Emission: [255, 255, 255]}
          },
          test12: {
            0: {
              Color: [72.57352941176471, 143.34558823529414, 157.5],
              Intensity: 3.529209029812166,
              Ambient: .3088057901085645,
              Sharpness: 4.411511287265207,
              Spread: 745.3689470963295,
              X: .23522316043425806,
              Y: .8087196277787352,
              Z: -.05
            },
            1: {
              Color: [162.5, 106.27162629757785, 43.01470588235293],
              Intensity: 6.617266930897811,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: -5.884887127347923,
              Y: 4.041013268998796,
              Z: -10.296398414613137
            },
            2: {
              Color: [212.5, 155.88235294117644, 52.08333333333334],
              Intensity: 3.8600723763570564,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: 13.966913665345515,
              Y: 6.3,
              Z: 1.8352576253661965
            },
            3: {Color: [160, 112.94117647058823, 60], Intensity: 1, Ambient: .1, Inner: 0, Outer: 5, X: -3, Y: 1, Z: 0},
            4: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            6: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: .3, Glossiness: .5},
            12: {Emission: [255, 255, 255]}
          },
          test13: {
            0: {
              Color: [72.57352941176471, 143.34558823529414, 157.5],
              Intensity: 3.529209029812166,
              Ambient: .3088057901085645,
              Sharpness: 4.411511287265207,
              Spread: 745.3689470963295,
              X: .23522316043425806,
              Y: .8087196277787352,
              Z: -.05
            },
            1: {
              Color: [162.5, 106.27162629757785, 43.01470588235293],
              Intensity: 6.617266930897811,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: -5.884887127347923,
              Y: 4.041013268998796,
              Z: -10.296398414613137
            },
            2: {
              Color: [212.5, 155.88235294117644, 52.08333333333334],
              Intensity: 3.8600723763570564,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: 13.966913665345515,
              Y: 6.3,
              Z: 1.8352576253661965
            },
            3: {Color: [160, 112.94117647058823, 60], Intensity: 1, Ambient: .1, Inner: 0, Outer: 5, X: -3, Y: 1, Z: 0},
            4: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            6: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: .8051008099259004, Glossiness: .5293813544718249},
            12: {Emission: [255, 255, 255]}
          },
          test14: {
            0: {
              Color: [72.57352941176471, 143.34558823529414, 157.5],
              Intensity: 3.529209029812166,
              Ambient: .3088057901085645,
              Sharpness: 4.411511287265207,
              Spread: 745.3689470963295,
              X: .23522316043425806,
              Y: .8087196277787352,
              Z: -.05
            },
            1: {
              Color: [162.5, 106.27162629757785, 43.01470588235293],
              Intensity: 1.2131656039979322,
              Ambient: .5073237980354989,
              Inner: 0,
              Outer: 6.286403584352921,
              X: -5.884887127347923,
              Y: 4.041013268998796,
              Z: -10.296398414613137
            },
            2: {
              Color: [212.5, 155.88235294117644, 52.08333333333334],
              Intensity: 4.742374633810098,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: 13.966913665345515,
              Y: 6.3,
              Z: 1.8352576253661965
            },
            3: {Color: [160, 112.94117647058823, 60], Intensity: 1, Ambient: .1, Inner: 0, Outer: 5, X: -3, Y: 1, Z: 0},
            4: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: .8933310356712045,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            6: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: .8051008099259004, Glossiness: .5293813544718249},
            12: {Emission: [255, 255, 255]}
          },
          test15: {
            0: {
              Color: [72.57352941176471, 143.34558823529414, 157.5],
              Intensity: 3.529209029812166,
              Ambient: .3088057901085645,
              Sharpness: 4.411511287265207,
              Spread: 745.3689470963295,
              X: .23522316043425806,
              Y: .8087196277787352,
              Z: -.05
            },
            1: {
              Color: [162.5, 106.27162629757785, 43.01470588235293],
              Intensity: 1.2131656039979322,
              Ambient: .5073237980354989,
              Inner: 0,
              Outer: 6.286403584352921,
              X: -5.884887127347923,
              Y: 4.041013268998796,
              Z: -10.296398414613137
            },
            2: {
              Color: [212.5, 155.88235294117644, 52.08333333333334],
              Intensity: 4.742374633810098,
              Ambient: .1,
              Inner: 0,
              Outer: 5,
              X: 13.966913665345515,
              Y: 6.3,
              Z: 1.8352576253661965
            },
            3: {Color: [160, 112.94117647058823, 60], Intensity: 1, Ambient: .1, Inner: 0, Outer: 5, X: -3, Y: 1, Z: 0},
            4: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1.786662071342409,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: .8933310356712045,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            6: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: .8051008099259004, Glossiness: .5293813544718249},
            12: {Emission: [255, 255, 255]}
          },
          test16: {
            0: {
              Color: [72.57352941176471, 143.34558823529414, 157.5],
              Intensity: 3.529209029812166,
              Ambient: .3088057901085645,
              Sharpness: 4.411511287265207,
              Spread: 745.3689470963295,
              X: .23522316043425806,
              Y: .8087196277787352,
              Z: -.05
            },
            1: {
              Color: [162.5, 106.27162629757785, 43.01470588235293],
              Intensity: 1.2131656039979322,
              Ambient: .5073237980354989,
              Inner: 0,
              Outer: 6.286403584352921,
              X: -5.884887127347923,
              Y: 4.041013268998796,
              Z: -10.296398414613137
            },
            2: {
              Color: [212.5, 127.57352941176475, 52.08333333333334],
              Intensity: .44115112872652074,
              Ambient: .4080647940720317,
              Inner: 0,
              Outer: 21.50611752541789,
              X: 13.966913665345515,
              Y: 6.3,
              Z: 1.8352576253661965
            },
            3: {Color: [160, 112.94117647058823, 60], Intensity: 1, Ambient: .1, Inner: 0, Outer: 5, X: -3, Y: 1, Z: 0},
            4: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1.786662071342409,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: .8933310356712045,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            6: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: .8051008099259004, Glossiness: .5293813544718249},
            12: {Emission: [255, 255, 255]}
          },
          test17: {
            0: {
              Color: [110.63725490196077, 172.6062091503268, 185],
              Intensity: 2.867482336722385,
              Ambient: .3418921247630536,
              Sharpness: 61.7611580217129,
              Spread: 1603.6725831466483,
              X: .23522316043425806,
              Y: .8087196277787352,
              Z: -.05
            },
            1: {
              Color: [162.5, 106.27162629757785, 43.01470588235293],
              Intensity: 1.2131656039979322,
              Ambient: .5073237980354989,
              Inner: 0,
              Outer: 6.286403584352921,
              X: -5.884887127347923,
              Y: 4.041013268998796,
              Z: -10.296398414613137
            },
            2: {
              Color: [212.5, 127.57352941176475, 52.08333333333334],
              Intensity: .44115112872652074,
              Ambient: .4080647940720317,
              Inner: 0,
              Outer: 21.50611752541789,
              X: 13.966913665345515,
              Y: 6.3,
              Z: 1.8352576253661965
            },
            3: {Color: [160, 112.94117647058823, 60], Intensity: 1, Ambient: .1, Inner: 0, Outer: 5, X: -3, Y: 1, Z: 0},
            4: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1.786662071342409,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: .8933310356712045,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            6: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: .8051008099259004, Glossiness: .5293813544718249},
            12: {Emission: [255, 255, 255]}
          },
          test18: {
            0: {
              Color: [110.63725490196077, 172.6062091503268, 185],
              Intensity: 2.867482336722385,
              Ambient: .3418921247630536,
              Sharpness: 61.7611580217129,
              Spread: 1603.6725831466483,
              X: .23522316043425806,
              Y: .8087196277787352,
              Z: -.05
            },
            1: {
              Color: [162.5, 106.27162629757785, 43.01470588235293],
              Intensity: 1.2131656039979322,
              Ambient: .5073237980354989,
              Inner: 0,
              Outer: 6.286403584352921,
              X: -5.884887127347923,
              Y: 4.041013268998796,
              Z: -10.296398414613137
            },
            2: {
              Color: [212.5, 127.57352941176475, 52.08333333333334],
              Intensity: .44115112872652074,
              Ambient: .4080647940720317,
              Inner: 0,
              Outer: 21.50611752541789,
              X: 13.966913665345515,
              Y: 6.3,
              Z: 1.8352576253661965
            },
            3: {
              Color: [160, 112.94117647058823, 60],
              Intensity: .11028778218163018,
              Ambient: .1,
              Inner: 0,
              Outer: 15.881440634154746,
              X: -1.47337584008271,
              Y: 1.8352576253661965,
              Z: -1.47337584008271
            },
            4: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1.786662071342409,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: .8933310356712045,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            6: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: .8051008099259004, Glossiness: .5293813544718249},
            12: {Emission: [255, 255, 255]}
          },
          test19: {
            0: {
              Color: [110.63725490196077, 172.6062091503268, 185],
              Intensity: 2.867482336722385,
              Ambient: .3418921247630536,
              Sharpness: 61.7611580217129,
              Spread: 1603.6725831466483,
              X: .23522316043425806,
              Y: .8087196277787352,
              Z: -.05
            },
            1: {
              Color: [162.5, 106.27162629757785, 43.01470588235293],
              Intensity: 1.2131656039979322,
              Ambient: .5073237980354989,
              Inner: 0,
              Outer: 6.286403584352921,
              X: -5.884887127347923,
              Y: 4.041013268998796,
              Z: -10.296398414613137
            },
            2: {
              Color: [212.5, 127.57352941176475, 52.08333333333334],
              Intensity: .44115112872652074,
              Ambient: .4080647940720317,
              Inner: 0,
              Outer: 21.50611752541789,
              X: 13.966913665345515,
              Y: 6.3,
              Z: 1.8352576253661965
            },
            3: {
              Color: [160, 112.94117647058823, 60],
              Intensity: .11028778218163018,
              Ambient: .1,
              Inner: 0,
              Outer: 15.881440634154746,
              X: -1.47337584008271,
              Y: 1.8352576253661965,
              Z: -1.47337584008271
            },
            4: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1.786662071342409,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: .8933310356712045,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            6: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: .2977770118904015,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: .9595037049801827,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: .8051008099259004, Glossiness: .5293813544718249},
            12: {Emission: [255, 255, 255]}
          },
          test20: {
            0: {
              Color: [110.63725490196077, 172.6062091503268, 185],
              Intensity: 2.867482336722385,
              Ambient: .19851800792693433,
              Sharpness: 61.7611580217129,
              Spread: 1603.6725831466483,
              X: .23522316043425806,
              Y: .8087196277787352,
              Z: -.05
            },
            1: {
              Color: [162.5, 106.27162629757785, 43.01470588235293],
              Intensity: 1.2131656039979322,
              Ambient: .5073237980354989,
              Inner: 0,
              Outer: 6.286403584352921,
              X: -5.884887127347923,
              Y: 4.041013268998796,
              Z: -10.296398414613137
            },
            2: {
              Color: [212.5, 127.57352941176475, 52.08333333333334],
              Intensity: .44115112872652074,
              Ambient: .4080647940720317,
              Inner: 0,
              Outer: 21.50611752541789,
              X: 13.966913665345515,
              Y: 6.3,
              Z: 1.8352576253661965
            },
            3: {
              Color: [160, 112.94117647058823, 60],
              Intensity: .11028778218163018,
              Ambient: .1,
              Inner: 0,
              Outer: 15.881440634154746,
              X: -1.47337584008271,
              Y: 1.8352576253661965,
              Z: -1.47337584008271
            },
            4: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1.786662071342409,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: .8933310356712045,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            6: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: .2977770118904015,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: .9595037049801827,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: .8051008099259004, Glossiness: .5293813544718249},
            12: {Emission: [255, 255, 255]}
          },
          test21: {
            0: {
              Color: [110.63725490196077, 172.6062091503268, 185],
              Intensity: 2.867482336722385,
              Ambient: .19851800792693433,
              Sharpness: 61.7611580217129,
              Spread: 1603.6725831466483,
              X: .23522316043425806,
              Y: .8087196277787352,
              Z: -.05
            },
            1: {
              Color: [162.5, 106.27162629757785, 43.01470588235293],
              Intensity: 1.2131656039979322,
              Ambient: .5073237980354989,
              Inner: 0,
              Outer: 6.286403584352921,
              X: -5.884887127347923,
              Y: 4.041013268998796,
              Z: -10.296398414613137
            },
            2: {
              Color: [212.5, 127.57352941176475, 52.08333333333334],
              Intensity: .44115112872652074,
              Ambient: .4080647940720317,
              Inner: 0,
              Outer: 21.50611752541789,
              X: 13.966913665345515,
              Y: 6.3,
              Z: 1.8352576253661965
            },
            3: {
              Color: [160, 112.94117647058823, 60],
              Intensity: .11028778218163018,
              Ambient: .1,
              Inner: 0,
              Outer: 15.881440634154746,
              X: -1.47337584008271,
              Y: 1.8352576253661965,
              Z: -1.47337584008271
            },
            4: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1.786662071342409,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: .8933310356712045,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: .38600723763570566,
              Overall_Metalness: .6948130277442702,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1.091849043598139,
              Roughness_Map_Influence: 1
            },
            6: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: .2977770118904015,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: .9595037049801827,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: .8051008099259004, Glossiness: .5293813544718249},
            12: {Emission: [255, 255, 255]}
          },
          test22: {
            0: {
              Color: [110.63725490196077, 141.2572087658593, 185],
              Intensity: 2.867482336722385,
              Ambient: .19851800792693433,
              Sharpness: 61.7611580217129,
              Spread: 1603.6725831466483,
              X: .23522316043425806,
              Y: .8087196277787352,
              Z: -.05
            },
            1: {
              Color: [162.5, 106.27162629757785, 43.01470588235293],
              Intensity: 1.2131656039979322,
              Ambient: .5073237980354989,
              Inner: 0,
              Outer: 6.286403584352921,
              X: -5.884887127347923,
              Y: 4.041013268998796,
              Z: -10.296398414613137
            },
            2: {
              Color: [212.5, 127.57352941176475, 52.08333333333334],
              Intensity: .44115112872652074,
              Ambient: .4080647940720317,
              Inner: 0,
              Outer: 21.50611752541789,
              X: 13.966913665345515,
              Y: 6.3,
              Z: 1.8352576253661965
            },
            3: {
              Color: [160, 112.94117647058823, 60],
              Intensity: .11028778218163018,
              Ambient: .1,
              Inner: 0,
              Outer: 15.881440634154746,
              X: -1.47337584008271,
              Y: 1.8352576253661965,
              Z: -1.47337584008271
            },
            4: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: 1.786662071342409,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: .8933310356712045,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: .38600723763570566,
              Overall_Metalness: .6948130277442702,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1.091849043598139,
              Roughness_Map_Influence: 1
            },
            6: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: .2977770118904015,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: .9595037049801827,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: .8051008099259004, Glossiness: .5293813544718249},
            12: {Emission: [255, 255, 255]}
          },
          test23: {
            0: {
              Color: [167.5, 218.97058823529412, 255],
              Intensity: 2.142353770260747,
              Ambient: .18040873854827344,
              Sharpness: 61.7611580217129,
              Spread: 1603.6725831466483,
              X: .23522316043425806,
              Y: .8087196277787352,
              Z: -.05
            },
            1: {
              Color: [162.5, 106.27162629757785, 43.01470588235293],
              Intensity: .5637773079633545,
              Ambient: .41719520789288234,
              Inner: 0,
              Outer: 10.256763742891607,
              X: -6.02536997885835,
              Y: 4.122621564482031,
              Z: -12.790697674418603
            },
            2: {
              Color: [212.5, 127.57352941176475, 52.08333333333334],
              Intensity: .3382663847780127,
              Ambient: .4510218463706836,
              Inner: 0,
              Outer: 30,
              X: 13.966913665345515,
              Y: 5.250176180408737,
              Z: 1.867512332628607
            },
            3: {
              Color: [160, 112.94117647058823, 60],
              Intensity: 0,
              Ambient: .1,
              Inner: 0,
              Outer: 15.881440634154746,
              X: -1.47337584008271,
              Y: 1.8352576253661965,
              Z: -1.47337584008271
            },
            4: {
              Albedo: [255, 255, 255],
              Base_Metalness: .15785764622973925,
              Overall_Metalness: 1.786662071342409,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: .9471458773784355,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: .6088794926004228,
              MetalMap_Influence: .766737138830162,
              Base_Gloss: .07892882311486962,
              Overall_Glossiness: 1.0486257928118392,
              Roughness_Map_Influence: .9245947850599013
            },
            6: {
              Albedo: [255, 255, 255],
              Base_Metalness: 0,
              Overall_Metalness: .642706131078224,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1.0824524312896406,
              Roughness_Map_Influence: 1.014799154334038
            },
            7: {
              Albedo: [135, 135, 135],
              Base_Metalness: .507399577167019,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1.623678646934461,
              Roughness_Map_Influence: .8381871445803895
            },
            8: {
              Albedo: [150, 150, 150],
              Base_Metalness: .4284707540521494,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .28188865398167723,
              Overall_Glossiness: .8118393234672305,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: 1, Glossiness: .3044397463002114},
            12: {Emission: [255, 255, 255]}
          },
          test24: {
            0: {
              Ambient: .0836153360082278,
              Shadow: 1,
              FOV: 64,
              Color: [111.16943016691445, 173.767171811548, 217.5855909627916],
              Intensity: 3.105712480305604,
              Sharpness: 8.768728085030368,
              Spread: 897.9177559071097,
              X: .23522316043425806,
              Y: .8087196277787352,
              Z: -.05
            },
            1: {
              Color: [137.76818501674697, 118.01356972318018, 94.64544325230983],
              Intensity: .6765327695560254,
              Ambient: .2747361040270342,
              Inner: 0,
              Outer: 10.256763742891607,
              X: -6.02536997885835,
              Y: 4.122621564482031,
              Z: -12.790697674418603
            },
            2: {
              Color: [127.79100927349141, 89.99778915629321, 45.29143905451556],
              Intensity: .4510218463706836,
              Ambient: .23678646934460887,
              Inner: 0,
              Outer: 3.58351440035262,
              X: 13.966913665345515,
              Y: 5.250176180408737,
              Z: 1.867512332628607
            },
            3: {
              Color: [22.653302288764497, 26.36509188861012, 35.502133648377324],
              Intensity: .358351440035262,
              Ambient: 1,
              Inner: 30,
              Outer: 30,
              X: -1.47337584008271,
              Y: 1.8352576253661965,
              Z: -1.47337584008271
            },
            4: {
              Albedo: [212.5970030911638, 212.5970030911638, 212.5970030911638],
              Base_Metalness: .0955603840094032,
              Overall_Metalness: 1.786662071342409,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: .7883731680775763,
              Roughness_Map_Influence: 1
            },
            5: {
              Albedo: [255, 255, 255],
              Base_Metalness: .3225162960317358,
              Overall_Metalness: .6088794926004228,
              MetalMap_Influence: .766737138830162,
              Base_Gloss: .07892882311486962,
              Overall_Glossiness: 1.0486257928118392,
              Roughness_Map_Influence: .9245947850599013,
              RainDropSpeed: .022,
              RainDropSize: 1.1
            },
            6: {
              Albedo: [232.55135457767497, 232.55135457767497, 232.55135457767497],
              Base_Metalness: 1,
              Overall_Metalness: .4658568720458406,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1.1467246081128384,
              Roughness_Map_Influence: 1.014799154334038
            },
            7: {
              Albedo: [135, 135, 135],
              Base_Metalness: .776428120076401,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1.623678646934461,
              Roughness_Map_Influence: .8381871445803895
            },
            8: {
              Albedo: [180.17118192558317, 180.17118192558317, 180.17118192558317],
              Base_Metalness: .2627910560258588,
              Overall_Metalness: 1.014799154334038,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: 1.03921917610226,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            10: {
              Albedo: [150, 150, 150],
              Base_Metalness: .2,
              Overall_Metalness: 1,
              MetalMap_Influence: 1,
              Base_Gloss: .3,
              Overall_Glossiness: 1,
              Roughness_Map_Influence: 1
            },
            11: {Specularity: 1, Glossiness: .3044397463002114},
            12: {Emission: [117.81383353023583, 71.3909153065361, 37.14574279665999]},
            13: {
              Emission: [132.7795971451192, 95.29597447776068, 50.95585334351289],
              LightColor: [152.73394863163034, 128.80944375995884, 82.51717213106187]
            },
            14: {
              color: [42.985015455818996, 42.985015455818996, 42.985015455818996],
              shadow: .5,
              gloss: .5,
              metalness: .5
            },
            15: {
              Color: [35.99999999999999, 130.79945583309706, 161],
              Size: 1.5345274148803145,
              Speed: .8549509882904609,
              Contrast: .17537456170060736,
              SpecStrength: .46035822446409436
            },
            16: {Color: [30.513545776749545, 30.513545776749545, 30.513545776749545]},
            17: {LuminanceCutoff: 0, LuminanceMultiplier: 1.313955280129294, GlowSize: 5.789605658130341},
            18: {NormalizedFocusWidth: .01644136515943194, Aperture: 4.384364042515184}
          }
        },
        closed: !1,
        folders: {
          General: {preset: "Default", closed: !1, folders: {}},
          "Moon Light": {preset: "Default", closed: !1, folders: {}},
          "Point Light 1": {preset: "Default", closed: !0, folders: {}},
          "Point Light 2": {preset: "Default", closed: !0, folders: {}},
          "Point Light 3": {preset: "Default", closed: !0, folders: {}},
          Robot: {preset: "Default", closed: !0, folders: {}},
          Concrete: {preset: "Default", closed: !0, folders: {}},
          Props: {preset: "Default", closed: !0, folders: {}},
          Puddle: {preset: "Default", closed: !0, folders: {}},
          "Material 2": {preset: "Default", closed: !0, folders: {}},
          "Material 3": {preset: "Default", closed: !0, folders: {}},
          "Material 4": {preset: "Default", closed: !0, folders: {}},
          "Transparent Decal": {preset: "Default", closed: !0, folders: {}},
          Emissive: {preset: "Default", closed: !1, folders: {}},
          Instance_bulb: {preset: "Default", closed: !1, folders: {}},
          Instance_outer: {preset: "Default", closed: !0, folders: {}},
          Rain: {preset: "Default", closed: !1, folders: {}},
          "Generic Material": {preset: "Default", closed: !0, folders: {}},
          Bloom: {preset: "Default", closed: !0, folders: {}},
          DOF: {preset: "Default", closed: !1, folders: {}}
        }
      }
    })
  dat.GUI.toggleHide(), g.remember(s), g.remember(l), g.remember(n), g.remember(a), g.remember(t), g.remember(e), g.remember(o), g.remember(r), g.remember(i), g.remember(_), g.remember(u), g.remember(p), g.remember(m), g.remember(v), g.remember(M), g.remember(c), g.remember(f), g.remember(h), g.remember(d)
  var I = g.addFolder("General"), b = g.addFolder("Moon Light"), O = g.addFolder("Point Light 1"),
    y = g.addFolder("Point Light 2"), C = g.addFolder("Point Light 3"), G = g.addFolder("Robot"),
    B = g.addFolder("Concrete"), R = g.addFolder("Props"), A = g.addFolder("Puddle"), E = g.addFolder("Material 2"),
    T = g.addFolder("Material 3"), S = g.addFolder("Material 4"), w = g.addFolder("Transparent Decal"),
    x = g.addFolder("Emissive"), H = g.addFolder("Instance_bulb"), X = g.addFolder("Instance_outer"),
    Y = g.addFolder("Rain"), Z = g.addFolder("Generic Material"), V = g.addFolder("Bloom"), W = g.addFolder("DOF")
  I.add(s, "Ambient", 0, 1, .15).onChange(guiChanged), I.add(s, "Shadow", 0, 2, 1).onChange(guiChanged), I.add(s, "FOV", 10, 160, 45).onChange(guiChanged), b.addColor(s, "Color").onChange(guiChanged), b.add(s, "Intensity", 0, 10, 1.5).onChange(guiChanged), b.add(s, "Sharpness", 0, 100, 1).onChange(guiChanged), b.add(s, "Spread", 0, 2048, 1024).onChange(guiChanged), b.add(s, "X", -1, 1, .3).onChange(guiChanged), b.add(s, "Y", -1, 1, 1).onChange(guiChanged), b.add(s, "Z", -1, 1, -.05).onChange(guiChanged), O.addColor(l, "Color").onChange(guiChanged), O.add(l, "Intensity", 0, 10, 1).onChange(guiChanged), O.add(l, "Ambient", 0, 1, .1).onChange(guiChanged), O.add(l, "Inner", 0, 30, 0).onChange(guiChanged), O.add(l, "Outer", 0, 30, 5).onChange(guiChanged), O.add(l, "X", -50, 50, 2).onChange(guiChanged), O.add(l, "Y", -50, 50, 1).onChange(guiChanged), O.add(l, "Z", -50, 50, 0).onChange(guiChanged), y.addColor(n, "Color").onChange(guiChanged), y.add(n, "Intensity", 0, 10, 1).onChange(guiChanged), y.add(n, "Ambient", 0, 1, .1).onChange(guiChanged), y.add(n, "Inner", 0, 30, 0).onChange(guiChanged), y.add(n, "Outer", 0, 30, 5).onChange(guiChanged), y.add(n, "X", -50, 50, 2).onChange(guiChanged), y.add(n, "Y", -50, 50, 1).onChange(guiChanged), y.add(n, "Z", -50, 50, 0).onChange(guiChanged), C.addColor(a, "Color").onChange(guiChanged), C.add(a, "Intensity", 0, 10, 1).onChange(guiChanged), C.add(a, "Ambient", 0, 1, .1).onChange(guiChanged), C.add(a, "Inner", 0, 30, 0).onChange(guiChanged), C.add(a, "Outer", 0, 30, 5).onChange(guiChanged), C.add(a, "X", -50, 50, 2).onChange(guiChanged), C.add(a, "Y", -50, 50, 1).onChange(guiChanged), C.add(a, "Z", -50, 50, 0).onChange(guiChanged), G.addColor(e, "Albedo").onChange(guiChanged), G.add(e, "Base_Metalness", 0, 1, .2).onChange(guiChanged), G.add(e, "Overall_Metalness", 0, 3, 1).onChange(guiChanged), G.add(e, "MetalMap_Influence", 0, 2, 1).onChange(guiChanged), G.add(e, "Base_Gloss", 0, 1, .3).onChange(guiChanged), G.add(e, "Overall_Glossiness", 0, 3, 1).onChange(guiChanged), G.add(e, "Roughness_Map_Influence", 0, 2, 1).onChange(guiChanged), G.add(e, "RainDropSpeed", 0, 2, 1).onChange(guiChanged), G.add(e, "RainDropSize", 0, 1.9, 1).onChange(guiChanged), B.addColor(t, "Albedo").onChange(guiChanged), B.add(t, "Base_Metalness", 0, 1, .2).onChange(guiChanged), B.add(t, "Overall_Metalness", 0, 3, 1).onChange(guiChanged), B.add(t, "MetalMap_Influence", 0, 2, 1).onChange(guiChanged), B.add(t, "Base_Gloss", 0, 1, .3).onChange(guiChanged), B.add(t, "Overall_Glossiness", 0, 3, 1).onChange(guiChanged), B.add(t, "Roughness_Map_Influence", 0, 2, 1).onChange(guiChanged), R.addColor(o, "Albedo").onChange(guiChanged), R.add(o, "Base_Metalness", 0, 1, .2).onChange(guiChanged), R.add(o, "Overall_Metalness", 0, 3, 1).onChange(guiChanged), R.add(o, "MetalMap_Influence", 0, 2, 1).onChange(guiChanged), R.add(o, "Base_Gloss", 0, 1, .3).onChange(guiChanged), R.add(o, "Overall_Glossiness", 0, 3, 1).onChange(guiChanged), R.add(o, "Roughness_Map_Influence", 0, 2, 1).onChange(guiChanged), A.addColor(r, "Albedo").onChange(guiChanged), A.add(r, "Base_Metalness", 0, 1, .2).onChange(guiChanged), A.add(r, "Overall_Metalness", 0, 3, 1).onChange(guiChanged), A.add(r, "MetalMap_Influence", 0, 2, 1).onChange(guiChanged), A.add(r, "Base_Gloss", 0, 1, .3).onChange(guiChanged), A.add(r, "Overall_Glossiness", 0, 3, 1).onChange(guiChanged), A.add(r, "Roughness_Map_Influence", 0, 2, 1).onChange(guiChanged), E.addColor(i, "Albedo").onChange(guiChanged), E.add(i, "Base_Metalness", 0, 1, .2).onChange(guiChanged), E.add(i, "Overall_Metalness", 0, 3, 1).onChange(guiChanged), E.add(i, "MetalMap_Influence", 0, 2, 1).onChange(guiChanged), E.add(i, "Base_Gloss", 0, 1, .3).onChange(guiChanged), E.add(i, "Overall_Glossiness", 0, 3, 1).onChange(guiChanged), E.add(i, "Roughness_Map_Influence", 0, 2, 1).onChange(guiChanged), T.addColor(_, "Albedo").onChange(guiChanged), T.add(_, "Base_Metalness", 0, 1, .2).onChange(guiChanged), T.add(_, "Overall_Metalness", 0, 3, 1).onChange(guiChanged), T.add(_, "MetalMap_Influence", 0, 2, 1).onChange(guiChanged), T.add(_, "Base_Gloss", 0, 1, .3).onChange(guiChanged), T.add(_, "Overall_Glossiness", 0, 3, 1).onChange(guiChanged), T.add(_, "Roughness_Map_Influence", 0, 2, 1).onChange(guiChanged), S.addColor(u, "Albedo").onChange(guiChanged), S.add(u, "Base_Metalness", 0, 1, .2).onChange(guiChanged), S.add(u, "Overall_Metalness", 0, 3, 1).onChange(guiChanged), S.add(u, "MetalMap_Influence", 0, 2, 1).onChange(guiChanged), S.add(u, "Base_Gloss", 0, 1, .3).onChange(guiChanged), S.add(u, "Overall_Glossiness", 0, 3, 1).onChange(guiChanged), S.add(u, "Roughness_Map_Influence", 0, 2, 1).onChange(guiChanged), w.add(p, "Specularity", 0, 1, .5).onChange(guiChanged), w.add(p, "Glossiness", 0, 1, .5).onChange(guiChanged), Y.addColor(c, "Color").onChange(guiChanged), Y.add(c, "Size", 0, 4, 1).onChange(guiChanged), Y.add(c, "Speed", 0, 2, 1).onChange(guiChanged), Y.add(c, "Contrast", 0, 1, .5).onChange(guiChanged), Y.add(c, "SpecStrength", 0, 3, 1).onChange(guiChanged), x.addColor(m, "Emission").onChange(guiChanged), H.addColor(v, "Emission").onChange(guiChanged), H.addColor(v, "LightColor").onChange(guiChanged), X.addColor(M, "color").onChange(guiChanged), X.add(M, "shadow", 0, 3, 1).onChange(guiChanged), X.add(M, "gloss", 0, 3, 1).onChange(guiChanged), X.add(M, "metalness", 0, 3, 1).onChange(guiChanged), V.add(h, "LuminanceCutoff", 0, 1, .5).onChange(guiChanged), V.add(h, "LuminanceMultiplier", 0, 10, .5).onChange(guiChanged),V.add(h, "GlowSize", .4, 10).onChange(guiChanged),W.add(d, "NormalizedFocusWidth", 0, .3, .5).onChange(guiChanged),W.add(d, "Aperture", 0, 200, 0).onChange(guiChanged),Z.addColor(f, "Color").onChange(guiChanged),guiChanged()
}

var instance
WebGLTwoTest = function () {
  GraphicsTestBase.call(this, "WebGL 2.0 Test"), instance = this, this.setRenderFrameCount(1060), this.updateTimePerRender = 1
}, WebGLTwoTest.prototype = Object.create(GraphicsTestBase.prototype), WebGLTwoTest.prototype.renderLoopResultsReceived = function (e, s) {
  this.duration = e, this.frames = s
}, WebGLTwoTest.prototype.shouldRestartRenderLoop = function () {
  return !1
}, WebGLTwoTest.prototype.testCompleted = function () {
  BasemarkWebEngine.submitResult(this.frames, guide, {}, this.duration, this.frames / (.001 * this.duration), this.frames), BasemarkWebEngine.nextPage(location.pathname)
}, WebGLTwoTest.prototype.initializeRenderTargetResources = function () {
  this.offScreenTex = null, this.displayTex = new THREE.WebGLRenderTarget(this.displayTexWidth, this.displayTexHeight, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBFormat
  }), this.copyTextureScene = new THREE.Scene, this.copyTextureQuad = createTextureCopyMesh(), this.copyTextureScene.add(this.copyTextureQuad)
}, WebGLTwoTest.prototype.initializeAssets = function () {
  try {
    this.renderer = new THREE.WebGLRenderer({glVersion: ["webgl2", "experimental-webgl2"]})
  } catch (e) {
    return void this.testFailed("Failed to create webgl2.0 renderer. Webgl2.0 not supported?")
  }
  this.loadTextures(["../__includes/full_scene/assets/textures/skybox_2k.png", "../__includes/full_scene/assets/textures/rain.png", "../__includes/full_scene/assets/textures/noise.jpg", "../__includes/full_scene/assets/textures/Robot_Albedo.png", "../__includes/full_scene/assets/textures/Robot_Normal.png", "../__includes/full_scene/assets/textures/Robot_Material.png", "../__includes/full_scene/assets/textures/ShadowMap.png", "../__includes/full_scene/assets/textures/spheremap.png", "../__includes/full_scene/assets/textures/spheremap_rough.png", "../__includes/full_scene/assets/textures/noise2.png", "../__includes/full_scene/assets/textures/Wall_A.png", "../__includes/full_scene/assets/textures/Wall_N.png", "../__includes/full_scene/assets/textures/Wall_Mat.png", "../__includes/full_scene/assets/textures/Main_A.png", "../__includes/full_scene/assets/textures/Main_N.png", "../__includes/full_scene/assets/textures/Main_Mat.png", "../__includes/full_scene/assets/textures/Decals_A.png"], this.afterAssetPreload)
}, WebGLTwoTest.prototype.afterAssetPreload = function () {
  this.initializeRenderTargetResources(), this.mlpos = new THREE.Vector4(20, 70, 0, 1), this.mldir = new THREE.Vector4(0, 0, 0, 1), this.pulsing_timer = new THREE.Vector2(.05, .05), this.mlcolor = new THREE.Vector3(1, 1, 1), this.robot_uniform_list = {
    diffuse: {
      type: "t",
      value: null
    },
    normal_map: {type: "t", value: null},
    material_map: {type: "t", value: null},
    environment_map: {type: "t", value: null},
    environment_rough_map: {type: "t", value: null},
    light_map: {type: "t", value: null},
    noise_map: {type: "t", value: null},
    mat_base_metal: {type: "f", value: null},
    shadow_strength: {type: "f", value: null},
    mat_overall_metallness: {type: "f", value: null},
    mat_metalmap_contr: {type: "f", value: null},
    mat_gloss_contr: {type: "f", value: null},
    mat_base_gloss: {type: "f", value: null},
    mat_glossiness: {type: "f", value: null},
    timer: {type: "f", value: null},
    specular_albedo: {type: "v3", value: new THREE.Vector3(1, 1, 1)},
    light_color: {type: "v3", value: new THREE.Vector3(1, 1, 1)},
    light_intensity: {type: "f", value: null},
    light_ambient: {type: "f", value: null},
    drop_size: {type: "f", value: null},
    moon_light_sharpness: {type: "f", value: null},
    moon_light_spread: {type: "f", value: null},
    moon_light_pos: {type: "v3", value: this.mlpos},
    moon_light_dir: {type: "v3", value: this.mldir},
    pl_pos: {type: "v3v", value: [new THREE.Vector3(-1, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(1, 1, 0)]},
    pl_intensity: {type: "fv1", value: [1, 1, 1]},
    pl_ambient: {type: "fv1", value: [.1, .1, .1]},
    pl_inner: {type: "fv1", value: [0, 0, 0]},
    pl_outer: {type: "fv1", value: [5, 5, 5]},
    pl_color: {
      type: "v3v",
      value: [new THREE.Vector3(.7, .3, .3), new THREE.Vector3(.3, .7, .3), new THREE.Vector3(.3, .3, .7)]
    },
    nearFar: {type: "v2", value: null}
  }, this.concrete_uniform_list = {
    diffuse: {type: "t", value: null},
    normal_map: {type: "t", value: null},
    material_map: {type: "t", value: null},
    environment_map: {type: "t", value: null},
    environment_rough_map: {type: "t", value: null},
    light_map: {type: "t", value: null},
    shadow_strength: {type: "f", value: null},
    mat_base_metal: {type: "f", value: null},
    mat_overall_metallness: {type: "f", value: null},
    mat_metalmap_contr: {type: "f", value: null},
    mat_gloss_contr: {type: "f", value: null},
    mat_base_gloss: {type: "f", value: null},
    mat_glossiness: {type: "f", value: null},
    specular_albedo: {type: "v3", value: new THREE.Vector3(1, 1, 1)},
    light_color: {type: "v3", value: new THREE.Vector3(1, 1, 1)},
    light_intensity: {type: "f", value: null},
    light_ambient: {type: "f", value: null},
    moon_light_sharpness: {type: "f", value: null},
    moon_light_spread: {type: "f", value: null},
    moon_light_pos: {type: "v3", value: this.mlpos},
    moon_light_dir: {type: "v3", value: this.mldir},
    pl_pos: {type: "v3v", value: [new THREE.Vector3(-1, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(1, 1, 0)]},
    pl_intensity: {type: "fv1", value: [1, 1, 1]},
    pl_ambient: {type: "fv1", value: [.1, .1, .1]},
    pl_inner: {type: "fv1", value: [0, 0, 0]},
    pl_outer: {type: "fv1", value: [5, 5, 5]},
    pl_color: {
      type: "v3v",
      value: [new THREE.Vector3(.7, .3, .3), new THREE.Vector3(.3, .7, .3), new THREE.Vector3(.3, .3, .7)]
    },
    nearFar: {type: "v2", value: null}
  }, this.props_uniform_list = {
    diffuse: {type: "t", value: null},
    normal_map: {type: "t", value: null},
    material_map: {type: "t", value: null},
    environment_map: {type: "t", value: null},
    environment_rough_map: {type: "t", value: null},
    light_map: {type: "t", value: null},
    shadow_strength: {type: "f", value: null},
    mat_base_metal: {type: "f", value: null},
    mat_overall_metallness: {type: "f", value: null},
    mat_metalmap_contr: {type: "f", value: null},
    mat_gloss_contr: {type: "f", value: null},
    mat_base_gloss: {type: "f", value: null},
    mat_glossiness: {type: "f", value: null},
    specular_albedo: {type: "v3", value: new THREE.Vector3(1, 1, 1)},
    light_color: {type: "v3", value: new THREE.Vector3(1, 1, 1)},
    light_intensity: {type: "f", value: null},
    light_ambient: {type: "f", value: null},
    moon_light_sharpness: {type: "f", value: null},
    moon_light_spread: {type: "f", value: null},
    moon_light_pos: {type: "v3", value: this.mlpos},
    moon_light_dir: {type: "v3", value: this.mldir},
    pl_pos: {type: "v3v", value: [new THREE.Vector3(-1, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(1, 1, 0)]},
    pl_intensity: {type: "fv1", value: [1, 1, 1]},
    pl_ambient: {type: "fv1", value: [.1, .1, .1]},
    pl_inner: {type: "fv1", value: [0, 0, 0]},
    pl_outer: {type: "fv1", value: [5, 5, 5]},
    pl_color: {
      type: "v3v",
      value: [new THREE.Vector3(.7, .3, .3), new THREE.Vector3(.3, .7, .3), new THREE.Vector3(.3, .3, .7)]
    },
    nearFar: {type: "v2", value: null}
  }, this.mat1_uniform_list = {
    diffuse: {type: "t", value: null},
    normal_map: {type: "t", value: null},
    material_map: {type: "t", value: null},
    environment_map: {type: "t", value: null},
    environment_rough_map: {type: "t", value: null},
    light_map: {type: "t", value: null},
    shadow_strength: {type: "f", value: null},
    mat_base_metal: {type: "f", value: null},
    mat_overall_metallness: {type: "f", value: null},
    mat_metalmap_contr: {type: "f", value: null},
    mat_gloss_contr: {type: "f", value: null},
    mat_base_gloss: {type: "f", value: null},
    mat_glossiness: {type: "f", value: null},
    specular_albedo: {type: "v3", value: new THREE.Vector3(1, 1, 1)},
    light_color: {type: "v3", value: new THREE.Vector3(1, 1, 1)},
    light_intensity: {type: "f", value: null},
    light_ambient: {type: "f", value: null},
    moon_light_sharpness: {type: "f", value: null},
    moon_light_spread: {type: "f", value: null},
    moon_light_pos: {type: "v3", value: this.mlpos},
    moon_light_dir: {type: "v3", value: this.mldir},
    nearFar: {type: "v2", value: null}
  }, this.mat2_uniform_list = {
    diffuse: {type: "t", value: null},
    normal_map: {type: "t", value: null},
    material_map: {type: "t", value: null},
    environment_map: {type: "t", value: null},
    environment_rough_map: {type: "t", value: null},
    light_map: {type: "t", value: null},
    shadow_strength: {type: "f", value: null},
    mat_base_metal: {type: "f", value: null},
    mat_overall_metallness: {type: "f", value: null},
    mat_metalmap_contr: {type: "f", value: null},
    mat_gloss_contr: {type: "f", value: null},
    mat_base_gloss: {type: "f", value: null},
    mat_glossiness: {type: "f", value: null},
    specular_albedo: {type: "v3", value: new THREE.Vector3(1, 1, 1)},
    light_color: {type: "v3", value: new THREE.Vector3(1, 1, 1)},
    light_intensity: {type: "f", value: null},
    light_ambient: {type: "f", value: null},
    moon_light_sharpness: {type: "f", value: null},
    moon_light_spread: {type: "f", value: null},
    moon_light_pos: {type: "v3", value: this.mlpos},
    moon_light_dir: {type: "v3", value: this.mldir}
  }, this.mat3_uniform_list = {
    diffuse: {type: "t", value: null},
    normal_map: {type: "t", value: null},
    material_map: {type: "t", value: null},
    environment_map: {type: "t", value: null},
    environment_rough_map: {type: "t", value: null},
    light_map: {type: "t", value: null},
    shadow_strength: {type: "f", value: null},
    mat_base_metal: {type: "f", value: null},
    mat_overall_metallness: {type: "f", value: null},
    mat_metalmap_contr: {type: "f", value: null},
    mat_gloss_contr: {type: "f", value: null},
    mat_base_gloss: {type: "f", value: null},
    mat_glossiness: {type: "f", value: null},
    specular_albedo: {type: "v3", value: new THREE.Vector3(1, 1, 1)},
    light_color: {type: "v3", value: new THREE.Vector3(1, 1, 1)},
    light_intensity: {type: "f", value: null},
    light_ambient: {type: "f", value: null},
    moon_light_sharpness: {type: "f", value: null},
    moon_light_spread: {type: "f", value: null},
    moon_light_pos: {type: "v3", value: this.mlpos},
    moon_light_dir: {type: "v3", value: this.mldir}
  }, this.mat4_uniform_list = {
    diffuse: {type: "t", value: null},
    normal_map: {type: "t", value: null},
    material_map: {type: "t", value: null},
    environment_map: {type: "t", value: null},
    environment_rough_map: {type: "t", value: null},
    light_map: {type: "t", value: null},
    shadow_strength: {type: "f", value: null},
    mat_base_metal: {type: "f", value: null},
    mat_overall_metallness: {type: "f", value: null},
    mat_metalmap_contr: {type: "f", value: null},
    mat_gloss_contr: {type: "f", value: null},
    mat_base_gloss: {type: "f", value: null},
    mat_glossiness: {type: "f", value: null},
    specular_albedo: {type: "v3", value: new THREE.Vector3(1, 1, 1)},
    light_color: {type: "v3", value: new THREE.Vector3(1, 1, 1)},
    light_intensity: {type: "f", value: null},
    light_ambient: {type: "f", value: null},
    moon_light_sharpness: {type: "f", value: null},
    moon_light_spread: {type: "f", value: null},
    moon_light_pos: {type: "v3", value: this.mlpos},
    moon_light_dir: {type: "v3", value: this.mldir}
  }, this.transp_decal_uniform_list = {
    diffuse: {type: "t", value: null},
    light_map: {type: "t", value: null},
    mat_specularity: {type: "f", value: null},
    mat_glossiness: {type: "f", value: null},
    light_color: {type: "v3", value: new THREE.Vector3(1, 1, 1)},
    light_intensity: {type: "f", value: null},
    light_ambient: {type: "f", value: null},
    shadow_strength: {type: "f", value: null},
    moon_light_sharpness: {type: "f", value: null},
    moon_light_spread: {type: "f", value: null},
    moon_light_pos: {type: "v3", value: this.mlpos},
    moon_light_dir: {type: "v3", value: this.mldir},
    pl_pos: {type: "v3v", value: [new THREE.Vector3(-1, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(1, 1, 0)]},
    pl_intensity: {type: "fv1", value: [1, 1, 1]},
    pl_ambient: {type: "fv1", value: [.1, .1, .1]},
    pl_inner: {type: "fv1", value: [0, 0, 0]},
    pl_outer: {type: "fv1", value: [5, 5, 5]},
    pl_color: {
      type: "v3v",
      value: [new THREE.Vector3(.7, .3, .3), new THREE.Vector3(.3, .7, .3), new THREE.Vector3(.3, .3, .7)]
    }
  }, this.generic_uniform_list = {
    diffuseColor: {type: "v3", value: new THREE.Vector3(1, 1, 1)},
    materialParams: {type: "v3", value: new THREE.Vector3(0, 0, 0)},
    nearFar: {type: "v2", value: null}
  }, this.emissive_uniform_list = {
    emission: {
      type: "v3",
      value: new THREE.Vector3(1, 1, 1)
    }
  }, this.instance_bulb_uniform_list = {
    emission: {
      type: "v3",
      value: new THREE.Vector3(1, 1, 1)
    }
  }, this.instance_outer_uniform_list = {
    color: {type: "v3", value: new THREE.Vector3(1, 1, 1)},
    material_params: {type: "v3", value: new THREE.Vector3(1, 1, 1)},
    nearFar: {type: "v2", value: null}
  }, this.cam_near = .01, this.cam_far = 150, this.scene = new THREE.Scene, this.forward_render_scene, this.container = document.getElementById(testContainerName), this.free_camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, this.cam_near, this.cam_far), this.current_camera = this.free_camera, this.scene_camera = null, this.zmesh, this.dae, this.renderer, this.robot_material, this.concrete_material, this.props_material, this.generic_material, this.lpos1, this.lpos2, this.lpos3, this.cam_anim = null, this.cam_tgt_anim = null, this.test_progress = 0, this.cam_progress = 0, this.cam_progress_spd = 1, this.cam_progress_auto = !0, this.robot = null, this.puddle = null, this.center_props = null, this.camera_controls
  var e = 27
  this.instanceHandler = new InstanceHandler(e), this.compositor, this.deferred_shader_compositor
  var s = new THREE.Geometry, l = this.getTexture("../__includes/full_scene/assets/textures/rain.png")
  for (i = 0; i < 500; i++) {
    var n = new THREE.Vector3, a = Math.random(), t = Math.random() + Math.random()
    n.x = 2.5 * Math.sin(a * Math.PI * 2) * t, n.y = 20 * Math.random(), n.z = 2.5 * Math.cos(a * Math.PI * 2) * t, s.vertices.push(n)
  }
  this.particle_material = new THREE.PointCloudMaterial({
    size: 1,
    sizeAttenuation: !0,
    map: l,
    transparent: !0,
    depthWrite: !1,
    type: "ShaderMaterial"
  }), this.particle_material.uniforms = THREE.UniformsUtils.merge([THREE.UniformsLib.particle, {
    strength: {
      type: "f",
      value: null
    },
    contrast: {type: "f", value: null},
    timer: {type: "f", value: 0},
    noise: {type: "t", value: null},
    drop_color: {type: "v3", value: new THREE.Vector3(.14, .63, .48)}
  }]), this.particle_material.vertexShader = document.getElementById("particleVertexShader").textContent, this.particle_material.fragmentShader = document.getElementById("particleFragmentShader").textContent, this.particle_material.uniforms.noise.value = this.getTexture("../__includes/full_scene/assets/textures/noise.jpg"), this.particle_material.depthTest = !0, this.particle_material.depthWrite = !1, this.particle_material.needsUpdate = !0, this.particles = new THREE.PointCloud(s, this.particle_material), this.particles.position.set(-1, 0, 4), this.moonlight_uniform_control = {
    Color: [83, 133, 143],
    Intensity: 2,
    Sharpness: 4,
    Spread: 1024,
    X: .3,
    Y: 1,
    Z: -.05,
    Ambient: .25,
    Shadow: 1,
    FOV: 45
  }, this.pl1_uniform_control = {
    Color: [160, 60, 60],
    Intensity: 1,
    Ambient: .1,
    Inner: 0,
    Outer: 5,
    X: 3,
    Y: 1,
    Z: 0
  }, this.pl2_uniform_control = {
    Color: [60, 160, 60],
    Intensity: 1,
    Ambient: .1,
    Inner: 0,
    Outer: 5,
    X: 0,
    Y: 1,
    Z: 0
  }, this.pl3_uniform_control = {
    Color: [60, 60, 160],
    Intensity: 1,
    Ambient: .1,
    Inner: 0,
    Outer: 5,
    X: -3,
    Y: 1,
    Z: 0
  }, this.robot_uniform_control = {
    Albedo: [255, 255, 255],
    Base_Metalness: .2,
    Overall_Metalness: 1,
    MetalMap_Influence: 1,
    Base_Gloss: .3,
    Overall_Glossiness: 1,
    Roughness_Map_Influence: 1,
    RainDropSpeed: .022,
    RainDropSize: 1.1
  }, this.concrete_uniform_control = {
    Albedo: [150, 150, 150],
    Base_Metalness: .2,
    Overall_Metalness: 1,
    MetalMap_Influence: 1,
    Base_Gloss: .3,
    Overall_Glossiness: 1,
    Roughness_Map_Influence: 1
  }, this.props_uniform_control = {
    Albedo: [150, 150, 150],
    Base_Metalness: .2,
    Overall_Metalness: 1,
    MetalMap_Influence: 1,
    Base_Gloss: .3,
    Overall_Glossiness: 1,
    Roughness_Map_Influence: 1
  }, this.mat1_uniform_control = {
    Albedo: [150, 150, 150],
    Base_Metalness: .2,
    Overall_Metalness: 1,
    MetalMap_Influence: 1,
    Base_Gloss: .3,
    Overall_Glossiness: 1,
    Roughness_Map_Influence: 1
  }, this.mat2_uniform_control = {
    Albedo: [150, 150, 150],
    Base_Metalness: .2,
    Overall_Metalness: 1,
    MetalMap_Influence: 1,
    Base_Gloss: .3,
    Overall_Glossiness: 1,
    Roughness_Map_Influence: 1
  }, this.mat3_uniform_control = {
    Albedo: [150, 150, 150],
    Base_Metalness: .2,
    Overall_Metalness: 1,
    MetalMap_Influence: 1,
    Base_Gloss: .3,
    Overall_Glossiness: 1,
    Roughness_Map_Influence: 1
  }, this.mat4_uniform_control = {
    Albedo: [150, 150, 150],
    Base_Metalness: .2,
    Overall_Metalness: 1,
    MetalMap_Influence: 1,
    Base_Gloss: .3,
    Overall_Glossiness: 1,
    Roughness_Map_Influence: 1
  }, this.transp_decal_uniform_control = {
    Specularity: .3,
    Glossiness: .5
  }, this.emissive_uniform_control = {Emission: [255, 255, 255]}, this.instance_bulb_uniform_control = {
    Emission: [60, 200, 60],
    LightColor: [100, 220, 80]
  }, this.instance_outer_uniform_control = {
    color: [60, 200, 60],
    shadow: .5,
    gloss: .5,
    metalness: .5
  }, this.pp_bloom_control = {
    LuminanceCutoff: .09,
    LuminanceMultiplier: .9,
    GlowSize: 8.4
  }, this.rain_uniform_control = {
    Size: 1,
    Speed: 1,
    Color: [36, 161, 122],
    Contrast: .25,
    SpecStrength: 1
  }, this.pp_dof_control = {NormalizedFocusWidth: .1, Aperture: 0}, this.generic_material_control = {
    Color: [0, 0, 0],
    MaterialParamsX: 0,
    MaterialParamsY: 0,
    MaterialParamsZ: 0
  }
  this.lpos1 = new THREE.Vector4(this.pl1_uniform_control.X, this.pl1_uniform_control.Y, this.pl1_uniform_control.Z, 1), this.lpos2 = new THREE.Vector4(this.pl2_uniform_control.X, this.pl2_uniform_control.Y, this.pl2_uniform_control.Z, 1), this.lpos3 = new THREE.Vector4(this.pl3_uniform_control.X, this.pl3_uniform_control.Y, this.pl3_uniform_control.Z, 1), this.mlpos.set(20, 70, 0, 1), this.mldir.set(this.moonlight_uniform_control.X, this.moonlight_uniform_control.Y, this.moonlight_uniform_control.Z, 0), this.lpos1.applyMatrix4(this.current_camera.matrixWorldInverse), this.lpos2.applyMatrix4(this.current_camera.matrixWorldInverse), this.lpos3.applyMatrix4(this.current_camera.matrixWorldInverse), this.mlpos.applyMatrix4(this.current_camera.matrixWorldInverse), this.mldir.applyMatrix4(this.current_camera.matrixWorldInverse), this.robot_uniform_list.pl_pos.value[0] = this.lpos1, this.robot_uniform_list.pl_pos.value[1] = this.lpos2, this.robot_uniform_list.pl_pos.value[2] = this.lpos3, this.robot_uniform_list.diffuse.value = this.getTexture("../__includes/full_scene/assets/textures/Robot_Albedo.png"), this.robot_uniform_list.normal_map.value = this.getTexture("../__includes/full_scene/assets/textures/Robot_Normal.png"), this.robot_uniform_list.material_map.value = this.getTexture("../__includes/full_scene/assets/textures/Robot_Material.png"), this.robot_uniform_list.light_map.value = this.getTexture("../__includes/full_scene/assets/textures/ShadowMap.png"), this.robot_uniform_list.environment_map.value = this.getTexture("../__includes/full_scene/assets/textures/spheremap.png"), this.robot_uniform_list.environment_rough_map.value = this.getTexture("../__includes/full_scene/assets/textures/spheremap_rough.png"), this.robot_uniform_list.noise_map.value = this.getTexture("../__includes/full_scene/assets/textures/noise2.png"), this.robot_uniform_list.noise_map.value.wrapS = THREE.RepeatWrapping, this.robot_uniform_list.noise_map.value.wrapT = THREE.RepeatWrapping, this.concrete_uniform_list.diffuse.value = this.getTexture("../__includes/full_scene/assets/textures/Wall_A.png"), this.concrete_uniform_list.normal_map.value = this.getTexture("../__includes/full_scene/assets/textures/Wall_N.png"), this.concrete_uniform_list.material_map.value = this.getTexture("../__includes/full_scene/assets/textures/Wall_Mat.png"), this.concrete_uniform_list.light_map.value = this.robot_uniform_list.light_map.value, this.concrete_uniform_list.environment_map.value = this.robot_uniform_list.environment_map.value, this.concrete_uniform_list.environment_rough_map.value = this.robot_uniform_list.environment_rough_map.value, this.concrete_uniform_list.diffuse.value.wrapS = THREE.RepeatWrapping, this.concrete_uniform_list.diffuse.value.wrapT = THREE.RepeatWrapping, this.concrete_uniform_list.normal_map.value.wrapS = THREE.RepeatWrapping, this.concrete_uniform_list.normal_map.value.wrapT = THREE.RepeatWrapping, this.concrete_uniform_list.material_map.value.wrapS = THREE.RepeatWrapping, this.concrete_uniform_list.material_map.value.wrapT = THREE.RepeatWrapping, this.props_uniform_list.diffuse.value = this.getTexture("../__includes/full_scene/assets/textures/Main_A.png"), this.props_uniform_list.normal_map.value = this.getTexture("../__includes/full_scene/assets/textures/Main_N.png"), this.props_uniform_list.material_map.value = this.getTexture("../__includes/full_scene/assets/textures/Main_Mat.png"), this.props_uniform_list.light_map.value = this.robot_uniform_list.light_map.value, this.props_uniform_list.environment_map.value = this.robot_uniform_list.environment_map.value, this.props_uniform_list.environment_rough_map.value = this.robot_uniform_list.environment_rough_map.value, this.mat1_uniform_list.diffuse.value = this.props_uniform_list.diffuse.value, this.mat1_uniform_list.normal_map.value = this.props_uniform_list.normal_map.value, this.mat1_uniform_list.material_map.value = this.props_uniform_list.material_map.value, this.mat1_uniform_list.light_map.value = this.robot_uniform_list.light_map.value, this.mat1_uniform_list.environment_map.value = new THREE.WebGLRenderTarget(window.innerWidth / 2, window.innerHeight / 2), this.mat1_uniform_list.environment_map.value.generateMipmaps = !1, this.mat1_uniform_list.environment_rough_map.value = this.robot_uniform_list.environment_rough_map.value, this.mat1_uniform_list.diffuse.value.wrapS = THREE.RepeatWrapping, this.mat1_uniform_list.diffuse.value.wrapT = THREE.RepeatWrapping, this.mat1_uniform_list.normal_map.value.wrapS = THREE.RepeatWrapping, this.mat1_uniform_list.normal_map.value.wrapT = THREE.RepeatWrapping, this.mat1_uniform_list.material_map.value.wrapS = THREE.RepeatWrapping, this.mat1_uniform_list.material_map.value.wrapT = THREE.RepeatWrapping, this.mat2_uniform_list.diffuse.value = this.concrete_uniform_list.diffuse.value, this.mat2_uniform_list.normal_map.value = this.concrete_uniform_list.normal_map.value, this.mat2_uniform_list.material_map.value = this.concrete_uniform_list.material_map.value, this.mat2_uniform_list.environment_map.value = this.robot_uniform_list.environment_map.value, this.mat2_uniform_list.light_map.value = this.robot_uniform_list.light_map.value, this.mat2_uniform_list.environment_rough_map.value = this.robot_uniform_list.environment_rough_map.value, this.mat2_uniform_list.diffuse.value.wrapS = THREE.RepeatWrapping, this.mat2_uniform_list.diffuse.value.wrapT = THREE.RepeatWrapping, this.mat2_uniform_list.normal_map.value.wrapS = THREE.RepeatWrapping, this.mat2_uniform_list.normal_map.value.wrapT = THREE.RepeatWrapping, this.mat2_uniform_list.material_map.value.wrapS = THREE.RepeatWrapping, this.mat2_uniform_list.material_map.value.wrapT = THREE.RepeatWrapping, this.mat3_uniform_list.diffuse.value = this.props_uniform_list.diffuse.value, this.mat3_uniform_list.normal_map.value = this.props_uniform_list.normal_map.value, this.mat3_uniform_list.material_map.value = this.props_uniform_list.material_map.value, this.mat3_uniform_list.environment_map.value = this.robot_uniform_list.environment_map.value, this.mat3_uniform_list.light_map.value = this.robot_uniform_list.light_map.value, this.mat3_uniform_list.environment_rough_map.value = this.robot_uniform_list.environment_rough_map.value, this.mat4_uniform_list.diffuse.value = this.props_uniform_list.diffuse.value, this.mat4_uniform_list.normal_map.value = this.props_uniform_list.normal_map.value, this.mat4_uniform_list.material_map.value = this.props_uniform_list.material_map.value, this.mat4_uniform_list.environment_map.value = this.robot_uniform_list.environment_map.value, this.mat4_uniform_list.light_map.value = this.robot_uniform_list.light_map.value, this.mat4_uniform_list.environment_rough_map.value = this.robot_uniform_list.environment_rough_map.value, this.transp_decal_uniform_list.diffuse.value = this.getTexture("../__includes/full_scene/assets/textures/Decals_A.png"), this.transp_decal_uniform_list.light_map.value = this.robot_uniform_list.light_map.value, this.transp_decal_uniform_list.diffuse.value.wrapS = THREE.RepeatWrapping, this.transp_decal_uniform_list.diffuse.value.wrapT = THREE.RepeatWrapping, this.robot_material = new THREE.ShaderMaterial({
    uniforms: this.robot_uniform_list,
    attributes: {},
    vertexShader: document.getElementById("robotVertexShader").textContent,
    fragmentShader: document.getElementById("robotPixelShader").textContent
  }), this.concrete_material = new THREE.ShaderMaterial({
    uniforms: this.concrete_uniform_list,
    attributes: {},
    vertexShader: document.getElementById("metallicVertexShader").textContent,
    fragmentShader: document.getElementById("metallicPixelShader").textContent
  }), this.props_material = new THREE.ShaderMaterial({
    uniforms: this.props_uniform_list,
    attributes: {},
    vertexShader: document.getElementById("metallicVertexShader").textContent,
    fragmentShader: document.getElementById("metallicPixelShader").textContent
  }), this.mat1_material = new THREE.ShaderMaterial({
    uniforms: this.mat1_uniform_list,
    attributes: {},
    vertexShader: document.getElementById("metallicVertexShader").textContent,
    fragmentShader: document.getElementById("metallicPixelShader").textContent,
    defines: {MULTI_PASS_REFLECTION: 1}
  }), this.mat2_material = new THREE.ShaderMaterial({
    uniforms: this.mat2_uniform_list,
    attributes: {},
    vertexShader: document.getElementById("metallicVertexShader").textContent,
    fragmentShader: document.getElementById("metallicPixelShader").textContent
  }), this.mat3_material = new THREE.ShaderMaterial({
    uniforms: this.mat3_uniform_list,
    attributes: {},
    vertexShader: document.getElementById("metallicVertexShader").textContent,
    fragmentShader: document.getElementById("metallicPixelShader").textContent
  }), this.mat4_material = new THREE.ShaderMaterial({
    uniforms: this.mat4_uniform_list,
    attributes: {},
    vertexShader: document.getElementById("metallicVertexShader").textContent,
    fragmentShader: document.getElementById("metallicPixelShader").textContent
  }), this.transp_decal_material = new THREE.ShaderMaterial({
    uniforms: this.transp_decal_uniform_list,
    attributes: {},
    vertexShader: document.getElementById("transpDecalVertexShader").textContent,
    fragmentShader: document.getElementById("transpDecalPixelShader").textContent,
    depthWrite: !1
  }), this.transp_decal_material.transparent = !0, this.emissive_material = new THREE.ShaderMaterial({
    uniforms: this.emissive_uniform_list,
    attributes: {},
    vertexShader: document.getElementById("emissiveVertexShader").textContent,
    fragmentShader: document.getElementById("emissivePixelShader").textContent
  }), this.generic_material = new THREE.ShaderMaterial({
    uniforms: this.generic_uniform_list,
    attributes: {},
    vertexShader: document.getElementById("genericVertexShader").textContent,
    fragmentShader: document.getElementById("genericFragmentShader").textContent
  }), this.instance_bulb_material = new THREE.ShaderMaterial({
    uniforms: this.instance_bulb_uniform_list,
    attributes: {
      instancePosition: {type: "v3", value: [], divisor: 1},
      instanceOrientation: {type: "v4", value: [], divisor: 1}
    },
    vertexShader: document.getElementById("instanceEmissiveVertexShader").textContent,
    fragmentShader: document.getElementById("instanceEmissivePixelShader").textContent,
    depthTest: !0,
    depthWrite: !1
  }), this.instance_bulb_material.transparent = !0, this.instance_bulb_material.blending = THREE.AdditiveBlending, this.instance_outer_material = new THREE.ShaderMaterial({
    uniforms: this.instance_outer_uniform_list,
    attributes: {
      instancePosition: {type: "v3", value: [], divisor: 1},
      instanceOrientation: {type: "v4", value: [], divisor: 1}
    },
    vertexShader: document.getElementById("instanceBasicVertexShader").textContent,
    fragmentShader: document.getElementById("instanceBasicPixelShader").textContent
  })
  var o = new THREE.ColladaLoader
  o.options.convertUpAxis = !0, o.load("../__includes/full_scene/assets/scene_uv2.DAE", function (e) {
    instance.dae = e.scene
    var s = [], l = [], n = []
    instance.dae.traverse(function (a) {
      if (-1 !== a.name.indexOf("Dummy")) {
        s.push(a.position)
        var t = new THREE.Quaternion
        t.setFromEuler(a.rotation), l.push(t)
      }
      -1 === a.name.indexOf("LampPH") && -1 === a.name.indexOf("bulbPH") || n.push(a), a instanceof THREE.PerspectiveCamera ? (instance.scene_camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, instance.cam_near, instance.cam_far), instance.scene_camera.position.copy(a.position), e.animations.length < 2 || (instance.cam_anim = new THREE.KeyFrameAnimation(e.animations[0]), instance.cam_tgt_anim = new THREE.KeyFrameAnimation(e.animations[1]), instance.reset_anim())) : a instanceof THREE.Mesh && (a.geometry.computeTangents(), 35 == a.id && (instance.center_props = a), "_4_robot" == a.material.name ? (a.material = instance.robot_material, instance.robot = a) : "_1_concrete" == a.material.name ? a.material = instance.concrete_material : "_2_props" == a.material.name ? a.material = instance.props_material : "_6_center" == a.material.name ? (a.material = instance.mat1_material, instance.puddle = a) : "_7_spiral" == a.material.name ? a.material = instance.mat2_material : "material3" == a.material.name ? a.material = instance.mat3_material : "material4" == a.material.name ? a.material = instance.mat4_material : "_3_decals" == a.material.name ? a.material = instance.transp_decal_material : "_5_emissive" == a.material.name ? a.material = instance.emissive_material : a.material = instance.generic_material)
    })
    for (var a = 0; a < n.length; ++a) {
      var t = n[a]
      t.parent.remove(t)
    }
    null == instance.robot && null == instance.puddle && instance.instanceHandler.setInstancePositions(s), instance.instanceHandler.setInstanceOrientations(l), instance.dae.scale.x = instance.dae.scale.y = instance.dae.scale.z = 1, instance.dae.updateMatrix(), instance.resumeAssetInitAfterMainSceneLoaded()
  })
}, WebGLTwoTest.prototype.resumeAssetInitAfterMainSceneLoaded = function () {
  for (var e = 50, s = 1.5, l = new THREE.Geometry, n = (new THREE.LineBasicMaterial({color: 17561}), -e); e >= n; n += s) l.vertices.push(new THREE.Vector3(-e, -.04, n)), l.vertices.push(new THREE.Vector3(e, -.04, n)), l.vertices.push(new THREE.Vector3(n, -.04, -e)), l.vertices.push(new THREE.Vector3(n, -.04, e))
  this.sky_material = new THREE.MeshBasicMaterial({
    color: 16777215,
    map: this.getTexture("../__includes/full_scene/assets/textures/skybox_2k.png")
  }), this.sky = new THREE.Mesh(new THREE.SphereGeometry(30, 32, 32), this.sky_material), this.forward_render_scene = new THREE.Scene, this.scene.add(this.dae), this.forward_render_scene.add(this.particles), this.free_camera.position.set(5, 2, 5), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.setSize(window.innerWidth, window.innerHeight), this.container.appendChild(this.renderer.domElement), this.renderer.gammaInput = !0, this.renderer.gammaOutput = !0, this.camera_controls = new THREE.OrbitControls(this.free_camera, this.renderer.domElement), this.deferred_shader_compositor = new DeferredShaderCompositor(this.renderer), this.deferred_shader_compositor.createTextureResources(this.offscreenTexWidth, this.offscreenTexHeight, this.current_camera.fov, this.robot_uniform_list.noise_map.value), this.deferred_shader_compositor.setMoonLightReference(this.mlpos, this.mldir, this.mlcolor, this.moonlight_uniform_control.Sharpness, this.moonlight_uniform_control.Spread, this.moonlight_uniform_control.Intensity)
  var a = new THREE.ColladaLoader
  a.options.convertUpAxis = !0, a.load("../__includes/full_scene/assets/lamp.DAE", function (e) {
    var s, l, n = e.scene
    n.traverse(function (e) {
      if ("Lamp" == e.name) for (l = e; null !== l && !(l instanceof THREE.Mesh);) l = l.children[0]
      else if ("Bulb" == e.name) for (s = e; null !== s && !(s instanceof THREE.Mesh);) s = s.children[0]
    }), instance.instanceHandler.createInstanceMesh(s.geometry, instance.instance_bulb_material), instance.instanceHandler.createInstanceMesh(l.geometry, instance.instance_outer_material)
    for (var a = instance.instanceHandler.getInstanceMeshes(), t = 0; t < a.length; ++t) {
      var o = a[t]
      o.material.transparent ? instance.forward_render_scene.add(o) : instance.scene.add(o)
    }
    instance.compositor = new Compositor(instance.renderer), instance.compositor.createTextureResources(instance.offscreenTexWidth, instance.offscreenTexHeight, instance.deferred_shader_compositor.getRenderTargets(MRT.Params), instance.deferred_shader_compositor.getRenderTarget()), instance.compositor.setEmissiveTarget(instance.deferred_shader_compositor.getRenderTargets(MRT.Normal)), initGUI(), instance.scene_camera.updateProjectionMatrix(), instance.current_camera = instance.scene_camera, instance.cam_progress_spd = 1, instance.update(), instance.render(), instance.assetInitializationDone()
  })
}, WebGLTwoTest.prototype.reset_anim = function () {
  for (var e = 0, s = this.cam_anim.hierarchy.length; s > e; e++) {
    var l = this.cam_anim.data.hierarchy[e].keys, n = this.cam_anim.data.hierarchy[e].sids,
      a = this.cam_anim.hierarchy[e]
    if (l.length && n) {
      for (var t = 0; t < n.length; t++) {
        var o = n[t], r = this.cam_anim.getNextKeyWith(o, e, 0)
        r && r.apply(o)
      }
      a.matrixAutoUpdate = !1, this.cam_anim.data.hierarchy[e].node.updateMatrix(), a.matrixWorldNeedsUpdate = !0
    }
  }
  this.cam_anim.loop = !1, this.cam_anim.play()
  for (var e = 0, s = this.cam_tgt_anim.hierarchy.length; s > e; e++) {
    var l = this.cam_tgt_anim.data.hierarchy[e].keys, n = this.cam_tgt_anim.data.hierarchy[e].sids,
      a = this.cam_tgt_anim.hierarchy[e]
    if (l.length && n) {
      for (var t = 0; t < n.length; t++) {
        var o = n[t], r = this.cam_tgt_anim.getNextKeyWith(o, e, 0)
        r && r.apply(o)
      }
      a.matrixAutoUpdate = !1, this.cam_tgt_anim.data.hierarchy[e].node.updateMatrix(), a.matrixWorldNeedsUpdate = !0
    }
  }
  this.cam_tgt_anim.loop = !1, this.cam_tgt_anim.play()
}, WebGLTwoTest.prototype.update = function (e) {
  GraphicsTestBase.prototype.update.call(this, e)
  var s = this.updateTimePerRender
  this.current_camera == this.scene_camera && (this.cam_progress >= 0 && this.cam_progress < 1202 ? (this.cam_progress_spd && this.cam_progress_auto && (this.cam_anim.update(16.66666666 * s * this.cam_progress_spd), this.cam_tgt_anim.update(16.66666 * s * this.cam_progress_spd)), this.cam_progress_auto && (this.cam_progress += this.cam_progress_spd)) : (this.cam_anim.stop(), this.cam_tgt_anim.stop(), this.cam_progress = 0, this.reset_anim()))
  var l = new THREE.Vector3(0, 0, 0), n = new THREE.Vector3(0, 0, 0), a = new THREE.Quaternion(0, 0, 0, 0),
    t = new THREE.Vector3(0, 0, 0)
  this.cam_anim.hierarchy[0].matrix.decompose(l, a, t), this.scene_camera.position.copy(l), this.cam_tgt_anim.hierarchy[0].matrix.decompose(n, a, t), this.scene_camera.lookAt(n), this.current_camera.updateMatrixWorld(), this.current_camera.matrixWorldInverse.getInverse(this.current_camera.matrixWorld)
  var o = l.distanceTo(n), r = this.compositor.getEffect(CompositorEffects.DepthOfField)
  r.setupTargetDepth((o - this.cam_near) / (this.cam_far - this.cam_near)), this.particle_material.uniforms.timer.value = 10 * e * this.rain_uniform_control.Speed % 1200 / 10, this.particle_material.uniforms.needsUpdate = !0, this.robot_material.uniforms.timer.value = 10 * e * this.robot_uniform_control.RainDropSpeed % 1200 / 10, this.robot_material.uniforms.needsUpdate = !0, this.pulsing_timer.x < 1 && this.pulsing_timer.x > 0 ? this.pulsing_timer.x += this.pulsing_timer.y : (this.pulsing_timer.y = -this.pulsing_timer.y, this.pulsing_timer.x += this.pulsing_timer.y), this.instanceHandler.update()
  for (var i = this.instanceHandler.getInstanceLightPositions(), _ = 0; _ < i.length; ++_) this.deferred_shader_compositor.changeLightPosition(_ + 3, i[_])
  this.robot_material.uniforms.nearFar.value = new THREE.Vector2(this.current_camera.near, this.current_camera.far), this.concrete_material.uniforms.nearFar.value = new THREE.Vector2(this.current_camera.near, this.current_camera.far), this.props_material.uniforms.nearFar.value = new THREE.Vector2(this.current_camera.near, this.current_camera.far), this.mat1_material.uniforms.nearFar.value = new THREE.Vector2(this.current_camera.near, this.current_camera.far), this.generic_material.uniforms.nearFar.value = new THREE.Vector2(this.current_camera.near, this.current_camera.far), this.instance_outer_material.uniforms.nearFar.value = new THREE.Vector2(this.current_camera.near, this.current_camera.far), this.deferred_shader_compositor.updateFov(this.current_camera.fov), this.deferred_shader_compositor.updateLights(this.current_camera.matrixWorldInverse, this.pulsing_timer.x), this.mlpos.set(20, 70, 0, 1), this.mldir.set(this.moonlight_uniform_control.X, this.moonlight_uniform_control.Y, this.moonlight_uniform_control.Z, 0), this.mlpos.applyMatrix4(this.current_camera.matrixWorldInverse), this.mldir.applyMatrix4(this.current_camera.matrixWorldInverse)
}, WebGLTwoTest.prototype.render = function () {
  var e = new THREE.Matrix4
  e.makeScale(1, -1, 1), this.robot.matrixNeedsUpdate = !1, this.robot.matrixAutoUpdate = !1, this.robot.rotationAutoUpdate = !1, this.center_props.matrixNeedsUpdate = !1, this.center_props.matrixAutoUpdate = !1, this.center_props.rotationAutoUpdate = !1, this.robot.updateMatrix(), this.center_props.updateMatrix(), this.robot.matrix.multiply(e), this.robot.updateMatrixWorld(), this.center_props.matrix.multiply(e), this.center_props.updateMatrixWorld(), this.renderer.setFaceCulling(THREE.CullFaceBack, THREE.FrontFaceDirectionCW), this.renderer.render(this.center_props, this.current_camera, this.mat1_uniform_list.environment_map.value, !0), this.renderer.autoClear = !1, this.renderer.autoClearColor = !1, this.renderer.autoClearDepth = !1, this.renderer.autoClearStencil = !1, this.renderer.render(this.robot, this.current_camera, this.mat1_uniform_list.environment_map.value, !1), this.renderer.autoClear = !0, this.renderer.autoClearColor = !0, this.renderer.autoClearDepth = !0, this.renderer.autoClearStencil = !0, this.renderer.setFaceCulling(THREE.CullFaceFront, THREE.FrontFaceDirectionCW), this.robot.matrix.multiply(e), this.robot.updateMatrixWorld(), this.center_props.matrix.multiply(e), this.center_props.updateMatrixWorld(), this.deferred_shader_compositor.geometryPass(this.scene, this.current_camera), this.renderer.autoClear = !1, this.deferred_shader_compositor.lightPass(this.compositor.getRenderTarget()), this.renderer.setFaceCulling(THREE.CullFaceBack, THREE.FrontFaceDirectionCW), this.renderer.render(this.sky, this.current_camera, this.compositor.getRenderTarget()), this.renderer.setFaceCulling(THREE.CullFaceFront, THREE.FrontFaceDirectionCW), this.renderer.render(this.forward_render_scene, this.current_camera, this.compositor.getRenderTarget()), this.renderer.autoClear = !0, this.compositor.applyPostProcessChain(), this.offScreenTex = this.compositor.getRenderTarget()
}
