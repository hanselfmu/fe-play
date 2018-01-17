function guiChanged() {
  if (1 != this.uniformsSetFromGUI) {
    this.uniformsSetFromGUI = !0
    var e = instance.robot_uniform_control, s = instance.moonlight_uniform_control, l = instance.lpos1,
      n = instance.lpos2, a = instance.lpos3, t = instance.pl1_uniform_control, o = instance.pl2_uniform_control,
      r = instance.pl3_uniform_control, _ = instance.concrete_uniform_control, i = instance.props_uniform_control,
      u = instance.mat1_uniform_control, p = instance.mat2_uniform_control, m = instance.mat3_uniform_control,
      h = instance.mat4_uniform_control, c = instance.transp_decal_uniform_control,
      v = instance.emissive_uniform_control, d = instance.rain_uniform_control, M = instance.pp_bloom_control,
      f = instance.pp_dof_control, g = instance.robot_material.uniforms
    g.mat_base_metal.value = e.Base_Metalness, g.mat_overall_metallness.value = e.Overall_Metalness, g.mat_metalmap_contr.value = e.MetalMap_Influence, g.mat_base_gloss.value = e.Base_Gloss, g.mat_glossiness.value = e.Overall_Glossiness, g.mat_gloss_contr.value = e.Roughness_Map_Influence, g.specular_albedo.value.set(e.Albedo[0] / 255, e.Albedo[1] / 255, e.Albedo[2] / 255), g.light_color.value.set(s.Color[0] / 255, s.Color[1] / 255, s.Color[2] / 255), g.light_intensity.value = s.Intensity, g.light_ambient.value = s.Ambient, g.moon_light_sharpness.value = s.Sharpness, g.moon_light_spread.value = s.Spread, g.pl_pos.value[0].set(l.x, l.y, l.z), g.pl_color.value[0].set(t.Color[0] / 255, t.Color[1] / 255, t.Color[2] / 255), g.pl_ambient.value[0] = t.Ambient, g.pl_inner.value[0] = t.Inner, g.pl_outer.value[0] = t.Outer, g.pl_intensity.value[0] = t.Intensity, g.pl_pos.value[1].set(n.x, n.y, n.z), g.pl_color.value[1].set(o.Color[0] / 255, o.Color[1] / 255, o.Color[2] / 255), g.pl_ambient.value[1] = o.Ambient, g.pl_inner.value[1] = o.Inner, g.pl_outer.value[1] = o.Outer, g.pl_intensity.value[1] = o.Intensity, g.pl_pos.value[2].set(a.x, a.y, a.z), g.pl_color.value[2].set(r.Color[0] / 255, r.Color[1] / 255, r.Color[2] / 255), g.pl_ambient.value[2] = r.Ambient, g.pl_inner.value[2] = r.Inner, g.pl_outer.value[2] = r.Outer, g.pl_intensity.value[2] = r.Intensity, g.drop_size.value = e.RainDropSize, g.shadow_strength.value = s.Shadow, g = instance.concrete_material.uniforms, g.mat_base_metal.value = _.Base_Metalness, g.mat_overall_metallness.value = _.Overall_Metalness, g.mat_metalmap_contr.value = _.MetalMap_Influence, g.mat_base_gloss.value = _.Base_Gloss, g.mat_glossiness.value = _.Overall_Glossiness, g.mat_gloss_contr.value = _.Roughness_Map_Influence, g.specular_albedo.value.set(_.Albedo[0] / 255, _.Albedo[1] / 255, _.Albedo[2] / 255), g.light_color.value.set(s.Color[0] / 255, s.Color[1] / 255, s.Color[2] / 255), g.light_intensity.value = s.Intensity, g.light_ambient.value = s.Ambient, g.moon_light_sharpness.value = s.Sharpness, g.moon_light_spread.value = s.Spread, g.pl_pos.value[0].set(l.x, l.y, l.z), g.pl_color.value[0].set(t.Color[0] / 255, t.Color[1] / 255, t.Color[2] / 255), g.pl_ambient.value[0] = t.Ambient, g.pl_inner.value[0] = t.Inner, g.pl_outer.value[0] = t.Outer, g.pl_intensity.value[0] = t.Intensity, g.pl_pos.value[1].set(n.x, n.y, n.z), g.pl_color.value[1].set(o.Color[0] / 255, o.Color[1] / 255, o.Color[2] / 255), g.pl_ambient.value[1] = o.Ambient, g.pl_inner.value[1] = o.Inner, g.pl_outer.value[1] = o.Outer, g.pl_intensity.value[1] = o.Intensity, g.pl_pos.value[2].set(a.x, a.y, a.z), g.pl_color.value[2].set(r.Color[0] / 255, r.Color[1] / 255, r.Color[2] / 255), g.pl_ambient.value[2] = r.Ambient, g.pl_inner.value[2] = r.Inner, g.pl_outer.value[2] = r.Outer, g.pl_intensity.value[2] = r.Intensity, g.shadow_strength.value = s.Shadow, g = instance.props_material.uniforms, g.mat_base_metal.value = i.Base_Metalness, g.mat_overall_metallness.value = i.Overall_Metalness, g.mat_metalmap_contr.value = i.MetalMap_Influence, g.mat_base_gloss.value = i.Base_Gloss, g.mat_glossiness.value = i.Overall_Glossiness, g.mat_gloss_contr.value = i.Roughness_Map_Influence, g.specular_albedo.value.set(i.Albedo[0] / 255, i.Albedo[1] / 255, i.Albedo[2] / 255), g.light_color.value.set(s.Color[0] / 255, s.Color[1] / 255, s.Color[2] / 255), g.light_intensity.value = s.Intensity, g.light_ambient.value = s.Ambient, g.moon_light_sharpness.value = s.Sharpness, g.moon_light_spread.value = s.Spread, g.pl_pos.value[0].set(l.x, l.y, l.z), g.pl_color.value[0].set(t.Color[0] / 255, t.Color[1] / 255, t.Color[2] / 255), g.pl_ambient.value[0] = t.Ambient, g.pl_inner.value[0] = t.Inner, g.pl_outer.value[0] = t.Outer, g.pl_intensity.value[0] = t.Intensity, g.pl_pos.value[1].set(n.x, n.y, n.z), g.pl_color.value[1].set(o.Color[0] / 255, o.Color[1] / 255, o.Color[2] / 255), g.pl_ambient.value[1] = o.Ambient, g.pl_inner.value[1] = o.Inner, g.pl_outer.value[1] = o.Outer, g.pl_intensity.value[1] = o.Intensity, g.pl_pos.value[2].set(a.x, a.y, a.z), g.pl_color.value[2].set(r.Color[0] / 255, r.Color[1] / 255, r.Color[2] / 255), g.pl_ambient.value[2] = r.Ambient, g.pl_inner.value[2] = r.Inner, g.pl_outer.value[2] = r.Outer, g.pl_intensity.value[2] = r.Intensity, g.shadow_strength.value = s.Shadow, g = instance.mat1_material.uniforms, g.mat_base_metal.value = u.Base_Metalness, g.mat_overall_metallness.value = u.Overall_Metalness, g.mat_metalmap_contr.value = u.MetalMap_Influence, g.mat_base_gloss.value = u.Base_Gloss,g.mat_glossiness.value = u.Overall_Glossiness,g.mat_gloss_contr.value = u.Roughness_Map_Influence,g.specular_albedo.value.set(u.Albedo[0] / 255, u.Albedo[1] / 255, u.Albedo[2] / 255),g.light_color.value.set(s.Color[0] / 255, s.Color[1] / 255, s.Color[2] / 255),g.light_intensity.value = s.Intensity,g.light_ambient.value = s.Ambient,g.moon_light_sharpness.value = s.Sharpness,g.moon_light_spread.value = s.Spread,g.pl_pos.value[0].set(l.x, l.y, l.z),g.pl_color.value[0].set(t.Color[0] / 255, t.Color[1] / 255, t.Color[2] / 255),g.pl_ambient.value[0] = t.Ambient,g.pl_inner.value[0] = t.Inner,g.pl_outer.value[0] = t.Outer,g.pl_intensity.value[0] = t.Intensity,g.pl_pos.value[1].set(n.x, n.y, n.z),g.pl_color.value[1].set(o.Color[0] / 255, o.Color[1] / 255, o.Color[2] / 255),g.pl_ambient.value[1] = o.Ambient,g.pl_inner.value[1] = o.Inner,g.pl_outer.value[1] = o.Outer,g.pl_intensity.value[1] = o.Intensity,g.pl_pos.value[2].set(a.x, a.y, a.z),g.pl_color.value[2].set(r.Color[0] / 255, r.Color[1] / 255, r.Color[2] / 255),g.pl_ambient.value[2] = r.Ambient,g.pl_inner.value[2] = r.Inner,g.pl_outer.value[2] = r.Outer,g.pl_intensity.value[2] = r.Intensity,g.shadow_strength.value = s.Shadow,g = instance.mat2_material.uniforms,g.mat_base_metal.value = p.Base_Metalness,g.mat_overall_metallness.value = p.Overall_Metalness,g.mat_metalmap_contr.value = p.MetalMap_Influence,g.mat_base_gloss.value = p.Base_Gloss,g.mat_glossiness.value = p.Overall_Glossiness,g.mat_gloss_contr.value = p.Roughness_Map_Influence,g.specular_albedo.value.set(p.Albedo[0] / 255, p.Albedo[1] / 255, p.Albedo[2] / 255),g.light_color.value.set(s.Color[0] / 255, s.Color[1] / 255, s.Color[2] / 255),g.light_intensity.value = s.Intensity,g.light_ambient.value = s.Ambient,g.moon_light_sharpness.value = s.Sharpness,g.moon_light_spread.value = s.Spread,g.pl_pos.value[0].set(l.x, l.y, l.z),g.pl_color.value[0].set(t.Color[0] / 255, t.Color[1] / 255, t.Color[2] / 255),g.pl_ambient.value[0] = t.Ambient,g.pl_inner.value[0] = t.Inner,g.pl_outer.value[0] = t.Outer,g.pl_intensity.value[0] = t.Intensity,g.pl_pos.value[1].set(n.x, n.y, n.z),g.pl_color.value[1].set(o.Color[0] / 255, o.Color[1] / 255, o.Color[2] / 255),g.pl_ambient.value[1] = o.Ambient,g.pl_inner.value[1] = o.Inner,g.pl_outer.value[1] = o.Outer,g.pl_intensity.value[1] = o.Intensity,g.pl_pos.value[2].set(a.x, a.y, a.z),g.pl_color.value[2].set(r.Color[0] / 255, r.Color[1] / 255, r.Color[2] / 255),g.pl_ambient.value[2] = r.Ambient,g.pl_inner.value[2] = r.Inner,g.pl_outer.value[2] = r.Outer,g.pl_intensity.value[2] = r.Intensity,g.shadow_strength.value = s.Shadow,g = instance.mat3_material.uniforms,g.mat_base_metal.value = m.Base_Metalness,g.mat_overall_metallness.value = m.Overall_Metalness,g.mat_metalmap_contr.value = m.MetalMap_Influence,g.mat_base_gloss.value = m.Base_Gloss,g.mat_glossiness.value = m.Overall_Glossiness,g.mat_gloss_contr.value = m.Roughness_Map_Influence,g.specular_albedo.value.set(m.Albedo[0] / 255, m.Albedo[1] / 255, m.Albedo[2] / 255),g.light_color.value.set(s.Color[0] / 255, s.Color[1] / 255, s.Color[2] / 255),g.light_intensity.value = s.Intensity,g.light_ambient.value = s.Ambient,g.moon_light_sharpness.value = s.Sharpness,g.moon_light_spread.value = s.Spread,g.pl_pos.value[0].set(l.x, l.y, l.z),g.pl_color.value[0].set(t.Color[0] / 255, t.Color[1] / 255, t.Color[2] / 255),g.pl_ambient.value[0] = t.Ambient,g.pl_inner.value[0] = t.Inner,g.pl_outer.value[0] = t.Outer,g.pl_intensity.value[0] = t.Intensity,g.pl_pos.value[1].set(n.x, n.y, n.z),g.pl_color.value[1].set(o.Color[0] / 255, o.Color[1] / 255, o.Color[2] / 255),g.pl_ambient.value[1] = o.Ambient,g.pl_inner.value[1] = o.Inner,g.pl_outer.value[1] = o.Outer,g.pl_intensity.value[1] = o.Intensity,g.pl_pos.value[2].set(a.x, a.y, a.z),g.pl_color.value[2].set(r.Color[0] / 255, r.Color[1] / 255, r.Color[2] / 255),g.pl_ambient.value[2] = r.Ambient,g.pl_inner.value[2] = r.Inner,g.pl_outer.value[2] = r.Outer,g.pl_intensity.value[2] = r.Intensity,g.shadow_strength.value = s.Shadow,g = instance.mat4_material.uniforms,g.mat_base_metal.value = h.Base_Metalness,g.mat_overall_metallness.value = h.Overall_Metalness,g.mat_metalmap_contr.value = h.MetalMap_Influence,g.mat_base_gloss.value = h.Base_Gloss,g.mat_glossiness.value = h.Overall_Glossiness,g.mat_gloss_contr.value = h.Roughness_Map_Influence,g.specular_albedo.value.set(h.Albedo[0] / 255, h.Albedo[1] / 255, h.Albedo[2] / 255),g.light_color.value.set(s.Color[0] / 255, s.Color[1] / 255, s.Color[2] / 255),g.light_intensity.value = s.Intensity,g.light_ambient.value = s.Ambient,g.moon_light_sharpness.value = s.Sharpness,g.moon_light_spread.value = s.Spread,g.pl_pos.value[0].set(l.x, l.y, l.z),g.pl_color.value[0].set(t.Color[0] / 255, t.Color[1] / 255, t.Color[2] / 255),g.pl_ambient.value[0] = t.Ambient,g.pl_inner.value[0] = t.Inner,g.pl_outer.value[0] = t.Outer,g.pl_intensity.value[0] = t.Intensity,g.pl_pos.value[1].set(n.x, n.y, n.z),g.pl_color.value[1].set(o.Color[0] / 255, o.Color[1] / 255, o.Color[2] / 255),g.pl_ambient.value[1] = o.Ambient,g.pl_inner.value[1] = o.Inner,g.pl_outer.value[1] = o.Outer,g.pl_intensity.value[1] = o.Intensity,g.pl_pos.value[2].set(a.x, a.y, a.z),g.pl_color.value[2].set(r.Color[0] / 255, r.Color[1] / 255, r.Color[2] / 255),g.pl_ambient.value[2] = r.Ambient,g.pl_inner.value[2] = r.Inner,g.pl_outer.value[2] = r.Outer,g.pl_intensity.value[2] = r.Intensity,g.shadow_strength.value = s.Shadow,g = instance.transp_decal_material.uniforms,g.mat_specularity.value = c.Specularity,g.mat_glossiness.value = c.Glossiness,g.light_color.value.set(s.Color[0] / 255, s.Color[1] / 255, s.Color[2] / 255),g.light_intensity.value = s.Intensity,g.light_ambient.value = s.Ambient,g.moon_light_sharpness.value = s.Sharpness,g.moon_light_spread.value = s.Spread,g.pl_pos.value[0].set(t.X, t.Y, t.Z),g.pl_color.value[0].set(t.Color[0] / 255, t.Color[1] / 255, t.Color[2] / 255),g.pl_ambient.value[0] = t.Ambient,g.pl_inner.value[0] = t.Inner,g.pl_outer.value[0] = t.Outer,g.pl_intensity.value[0] = t.Intensity,g.pl_pos.value[1].set(o.X, o.Y, o.Z),g.pl_color.value[1].set(o.Color[0] / 255, o.Color[1] / 255, o.Color[2] / 255),g.pl_ambient.value[1] = o.Ambient,g.pl_inner.value[1] = o.Inner,g.pl_outer.value[1] = o.Outer,g.pl_intensity.value[1] = o.Intensity,g.pl_pos.value[2].set(r.X, r.Y, r.Z),g.pl_color.value[2].set(r.Color[0] / 255, r.Color[1] / 255, r.Color[2] / 255),g.pl_ambient.value[2] = r.Ambient,g.pl_inner.value[2] = r.Inner,g.pl_outer.value[2] = r.Outer,g.pl_intensity.value[2] = r.Intensity,g.shadow_strength.value = s.Shadow,g = instance.generic_material.uniforms,g.light_color.value.set(s.Color[0] / 255, s.Color[1] / 255, s.Color[2] / 255),g.light_intensity.value = s.Intensity,g.light_ambient.value = s.Ambient,g.moon_light_sharpness.value = s.Sharpness,g.moon_light_spread.value = s.Spread,g = instance.emissive_material.uniforms,g.emission.value.set(v.Emission[0] / 255, v.Emission[1] / 255, v.Emission[2] / 255),g = instance.particle_material.uniforms,g.drop_color.value.set(d.Color[0] / 255, d.Color[1] / 255, d.Color[2] / 255),instance.particle_material.size = d.Size,g.contrast.value = d.Contrast,g.strength.value = d.SpecStrength
    var I = instance.compositor.getEffect(CompositorEffects.Bloom)
    I.setBlurSigma(M.GlowSize), I.setLuminanceValues(M.LuminanceCutoff, M.LuminanceMultiplier), instance.current_camera.fov = s.FOV, instance.current_camera.updateProjectionMatrix()
    var b = instance.compositor.getEffect(CompositorEffects.DepthOfField)
    b.setupDOFParameters(f.NormalizedFocusWidth, f.Aperture), instance.particle_material.needsUpdate = !0, instance.generic_material.needsUpdate = !0, instance.emissive_material.needsUpdate = !0, instance.transp_decal_material.needsUpdate = !0, instance.props_material.needsUpdate = !0, instance.robot_material.needsUpdate = !0
  }
}

function initGUI() {
  var e = instance.robot_uniform_control, s = instance.moonlight_uniform_control,
    l = (instance.lpos1, instance.lpos2, instance.lpos3, instance.pl1_uniform_control),
    n = instance.pl2_uniform_control, a = instance.pl3_uniform_control, t = instance.concrete_uniform_control,
    o = instance.props_uniform_control, r = instance.mat1_uniform_control, _ = instance.mat2_uniform_control,
    i = instance.mat3_uniform_control, u = instance.mat4_uniform_control, p = instance.transp_decal_uniform_control,
    m = instance.emissive_uniform_control, h = instance.rain_uniform_control, c = instance.pp_bloom_control,
    v = instance.pp_dof_control, d = new dat.GUI({
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
              Ambient: .09925900396346717,
              Shadow: 1.0146475960709977,
              FOV: 64,
              Color: [100.00000000000001, 123.52941176470588, 150],
              Intensity: 4.171952078928824,
              Sharpness: 6.765327695560254,
              Spread: 900.6004228329809,
              X: .1726568005637774,
              Y: .5334742776603241,
              Z: -.030303030303030276
            },
            1: {
              Color: [160, 114.32525951557096, 73.72549019607843],
              Intensity: 1,
              Ambient: 0,
              Inner: 0,
              Outer: 9.809725158562369,
              X: -6.02536997885835,
              Y: 4.122621564482031,
              Z: -12.790697674418603
            },
            2: {
              Color: [187.5, 126.94636678200693, 84.55882352941178],
              Intensity: .9020436927413672,
              Ambient: .03382663847780127,
              Inner: 0,
              Outer: 9.809725158562369,
              X: 13.966913665345515,
              Y: 5.250176180408737,
              Z: 1.867512332628607
            },
            3: {
              Color: [36.27450980392156, 39.50403690888118, 49.99999999999999],
              Intensity: .33,
              Ambient: .96,
              Inner: 30,
              Outer: 30,
              X: -3.770260747004933,
              Y: 16.525722339675823,
              Z: -10.535588442565185
            },
            4: {
              Albedo: [175, 175, 175],
              Base_Metalness: .14337411683611925,
              Overall_Metalness: 2.063424947145877,
              MetalMap_Influence: 1.0373502466525721,
              Base_Gloss: 0,
              Overall_Glossiness: .5436205981242258,
              Roughness_Map_Influence: .8569415081042988
            },
            5: {
              Albedo: [225, 225, 225],
              Base_Metalness: 0,
              Overall_Metalness: .7609856970532483,
              MetalMap_Influence: .9471458773784355,
              Base_Gloss: .37497845941754265,
              Overall_Glossiness: 1.091849043598139,
              Roughness_Map_Influence: .7499569188350853,
              RainDropSpeed: .022,
              RainDropSize: 1.1
            },
            6: {
              Albedo: [125.00000000000001, 125.00000000000001, 125.00000000000001],
              Base_Metalness: .12131656039979322,
              Overall_Metalness: .7441860465116279,
              MetalMap_Influence: .766737138830162,
              Base_Gloss: 0,
              Overall_Glossiness: .9304257528556594,
              Roughness_Map_Influence: 1
            },
            7: {
              Albedo: [112.5, 112.5, 112.5],
              Base_Metalness: .1014799154334038,
              Overall_Metalness: 2.0972515856236784,
              MetalMap_Influence: 1,
              Base_Gloss: .06765327695560254,
              Overall_Glossiness: 1.9281183932346722,
              Roughness_Map_Influence: .6539816772374912
            },
            8: {
              Albedo: [160, 160, 160],
              Base_Metalness: .09925900396346717,
              Overall_Metalness: .6765327695560254,
              MetalMap_Influence: 1,
              Base_Gloss: 0,
              Overall_Glossiness: .9595037049801827,
              Roughness_Map_Influence: 1
            },
            9: {
              Albedo: [177.5, 177.5, 177.5],
              Base_Metalness: .3382663847780127,
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
            11: {Specularity: 1, Glossiness: .26469067723591244},
            12: {Emission: [255, 202.05882352941174, 164.99999999999997]},
            13: {
              Color: [105, 184.4117647058824, 255],
              Size: 1.1726568005637774,
              Speed: 1.1050035236081748,
              Contrast: 1,
              SpecStrength: .5412262156448203
            },
            14: {LuminanceCutoff: 0, LuminanceMultiplier: 1.127554615926709, GlowSize: 5.4875264270613116},
            15: {NormalizedFocusWidth: .022057556436326037, Aperture: 6.617266930897811}
          }
        },
        closed: !1,
        folders: {
          General: {preset: "Default", closed: !0, folders: {}},
          "Moon Light": {preset: "Default", closed: !0, folders: {}},
          "Point Light 1": {preset: "Default", closed: !0, folders: {}},
          "Point Light 2": {preset: "Default", closed: !1, folders: {}},
          "Point Light 3": {preset: "Default", closed: !0, folders: {}},
          Robot: {preset: "Default", closed: !0, folders: {}},
          Concrete: {preset: "Default", closed: !0, folders: {}},
          Props: {preset: "Default", closed: !1, folders: {}},
          Puddle: {preset: "Default", closed: !0, folders: {}},
          "Material 2": {preset: "Default", closed: !0, folders: {}},
          "Material 3": {preset: "Default", closed: !0, folders: {}},
          "Material 4": {preset: "Default", closed: !0, folders: {}},
          "Transparent Decal": {preset: "Default", closed: !0, folders: {}},
          Emissive: {preset: "Default", closed: !0, folders: {}},
          Rain: {preset: "Default", closed: !0, folders: {}},
          Bloom: {preset: "Default", closed: !0, folders: {}},
          DOF: {preset: "Default", closed: !1, folders: {}}
        }
      }
    })
  dat.GUI.toggleHide(), d.remember(s), d.remember(l), d.remember(n), d.remember(a), d.remember(t), d.remember(e), d.remember(o), d.remember(r), d.remember(_), d.remember(i), d.remember(u), d.remember(p), d.remember(m), d.remember(h), d.remember(c), d.remember(v)
  var M = d.addFolder("General"), f = d.addFolder("Moon Light"), g = d.addFolder("Point Light 1"),
    I = d.addFolder("Point Light 2"), b = d.addFolder("Point Light 3"), y = d.addFolder("Robot"),
    O = d.addFolder("Concrete"), C = d.addFolder("Props"), G = d.addFolder("Puddle"), B = d.addFolder("Material 2"),
    R = d.addFolder("Material 3"), A = d.addFolder("Material 4"), E = d.addFolder("Transparent Decal"),
    S = d.addFolder("Emissive"), T = d.addFolder("Rain"), x = d.addFolder("Bloom"), w = d.addFolder("DOF")
  M.add(s, "Ambient", 0, 1, .15).onChange(guiChanged), M.add(s, "Shadow", 0, 2, 1).onChange(guiChanged), M.add(s, "FOV", 10, 160, 45).onChange(guiChanged), f.addColor(s, "Color").onChange(guiChanged), f.add(s, "Intensity", 0, 10, 1.5).onChange(guiChanged), f.add(s, "Sharpness", 0, 100, 1).onChange(guiChanged), f.add(s, "Spread", 0, 2048, 1024).onChange(guiChanged), f.add(s, "X", -1, 1, .3).onChange(guiChanged), f.add(s, "Y", -1, 1, 1).onChange(guiChanged), f.add(s, "Z", -1, 1, -.05).onChange(guiChanged), g.addColor(l, "Color").onChange(guiChanged), g.add(l, "Intensity", 0, 10, 1).onChange(guiChanged), g.add(l, "Ambient", 0, 1, .1).onChange(guiChanged), g.add(l, "Inner", 0, 30, 0).onChange(guiChanged), g.add(l, "Outer", 0, 30, 5).onChange(guiChanged), g.add(l, "X", -50, 50, 2).onChange(guiChanged), g.add(l, "Y", -50, 50, 1).onChange(guiChanged), g.add(l, "Z", -50, 50, 0).onChange(guiChanged), I.addColor(n, "Color").onChange(guiChanged), I.add(n, "Intensity", 0, 10, 1).onChange(guiChanged), I.add(n, "Ambient", 0, 1, .1).onChange(guiChanged), I.add(n, "Inner", 0, 30, 0).onChange(guiChanged), I.add(n, "Outer", 0, 30, 5).onChange(guiChanged), I.add(n, "X", -50, 50, 2).onChange(guiChanged), I.add(n, "Y", -50, 50, 1).onChange(guiChanged), I.add(n, "Z", -50, 50, 0).onChange(guiChanged), b.addColor(a, "Color").onChange(guiChanged), b.add(a, "Intensity", 0, 10, 1).onChange(guiChanged), b.add(a, "Ambient", 0, 1, .1).onChange(guiChanged), b.add(a, "Inner", 0, 30, 0).onChange(guiChanged), b.add(a, "Outer", 0, 30, 5).onChange(guiChanged), b.add(a, "X", -50, 50, 2).onChange(guiChanged), b.add(a, "Y", -50, 50, 1).onChange(guiChanged), b.add(a, "Z", -50, 50, 0).onChange(guiChanged), y.addColor(e, "Albedo").onChange(guiChanged), y.add(e, "Base_Metalness", 0, 1, .2).onChange(guiChanged), y.add(e, "Overall_Metalness", 0, 3, 1).onChange(guiChanged), y.add(e, "MetalMap_Influence", 0, 2, 1).onChange(guiChanged), y.add(e, "Base_Gloss", 0, 1, .3).onChange(guiChanged), y.add(e, "Overall_Glossiness", 0, 3, 1).onChange(guiChanged), y.add(e, "Roughness_Map_Influence", 0, 2, 1).onChange(guiChanged), y.add(e, "RainDropSpeed", 0, 2, 1).onChange(guiChanged), y.add(e, "RainDropSize", 0, 1.9, 1).onChange(guiChanged), O.addColor(t, "Albedo").onChange(guiChanged), O.add(t, "Base_Metalness", 0, 1, .2).onChange(guiChanged), O.add(t, "Overall_Metalness", 0, 3, 1).onChange(guiChanged), O.add(t, "MetalMap_Influence", 0, 2, 1).onChange(guiChanged), O.add(t, "Base_Gloss", 0, 1, .3).onChange(guiChanged), O.add(t, "Overall_Glossiness", 0, 3, 1).onChange(guiChanged), O.add(t, "Roughness_Map_Influence", 0, 2, 1).onChange(guiChanged), C.addColor(o, "Albedo").onChange(guiChanged), C.add(o, "Base_Metalness", 0, 1, .2).onChange(guiChanged), C.add(o, "Overall_Metalness", 0, 3, 1).onChange(guiChanged), C.add(o, "MetalMap_Influence", 0, 2, 1).onChange(guiChanged), C.add(o, "Base_Gloss", 0, 1, .3).onChange(guiChanged), C.add(o, "Overall_Glossiness", 0, 3, 1).onChange(guiChanged), C.add(o, "Roughness_Map_Influence", 0, 2, 1).onChange(guiChanged), G.addColor(r, "Albedo").onChange(guiChanged), G.add(r, "Base_Metalness", 0, 1, .2).onChange(guiChanged), G.add(r, "Overall_Metalness", 0, 3, 1).onChange(guiChanged), G.add(r, "MetalMap_Influence", 0, 2, 1).onChange(guiChanged), G.add(r, "Base_Gloss", 0, 1, .3).onChange(guiChanged), G.add(r, "Overall_Glossiness", 0, 3, 1).onChange(guiChanged), G.add(r, "Roughness_Map_Influence", 0, 2, 1).onChange(guiChanged), B.addColor(_, "Albedo").onChange(guiChanged), B.add(_, "Base_Metalness", 0, 1, .2).onChange(guiChanged), B.add(_, "Overall_Metalness", 0, 3, 1).onChange(guiChanged), B.add(_, "MetalMap_Influence", 0, 2, 1).onChange(guiChanged), B.add(_, "Base_Gloss", 0, 1, .3).onChange(guiChanged), B.add(_, "Overall_Glossiness", 0, 3, 1).onChange(guiChanged), B.add(_, "Roughness_Map_Influence", 0, 2, 1).onChange(guiChanged), R.addColor(i, "Albedo").onChange(guiChanged), R.add(i, "Base_Metalness", 0, 1, .2).onChange(guiChanged), R.add(i, "Overall_Metalness", 0, 3, 1).onChange(guiChanged), R.add(i, "MetalMap_Influence", 0, 2, 1).onChange(guiChanged), R.add(i, "Base_Gloss", 0, 1, .3).onChange(guiChanged), R.add(i, "Overall_Glossiness", 0, 3, 1).onChange(guiChanged), R.add(i, "Roughness_Map_Influence", 0, 2, 1).onChange(guiChanged), A.addColor(u, "Albedo").onChange(guiChanged), A.add(u, "Base_Metalness", 0, 1, .2).onChange(guiChanged), A.add(u, "Overall_Metalness", 0, 3, 1).onChange(guiChanged), A.add(u, "MetalMap_Influence", 0, 2, 1).onChange(guiChanged), A.add(u, "Base_Gloss", 0, 1, .3).onChange(guiChanged), A.add(u, "Overall_Glossiness", 0, 3, 1).onChange(guiChanged), A.add(u, "Roughness_Map_Influence", 0, 2, 1).onChange(guiChanged), E.add(p, "Specularity", 0, 1, .5).onChange(guiChanged), E.add(p, "Glossiness", 0, 1, .5).onChange(guiChanged), T.addColor(h, "Color").onChange(guiChanged), T.add(h, "Size", 0, 4, 1).onChange(guiChanged), T.add(h, "Speed", 0, 2, 1).onChange(guiChanged), T.add(h, "Contrast", 0, 1, .5).onChange(guiChanged), T.add(h, "SpecStrength", 0, 3, 1).onChange(guiChanged), S.addColor(m, "Emission").onChange(guiChanged), x.add(c, "LuminanceCutoff", 0, 1, .5).onChange(guiChanged), x.add(c, "LuminanceMultiplier", 0, 10, .5).onChange(guiChanged), x.add(c, "GlowSize", .4, 10).onChange(guiChanged), w.add(v, "NormalizedFocusWidth", 0, 1, .5).onChange(guiChanged), w.add(v, "Aperture", 0, 200, 0).onChange(guiChanged), guiChanged()
}

var instance
WebGLOneTest = function () {
  GraphicsTestBase.call(this, "WebGL 1.0.2 Test"), instance = this, this.setRenderFrameCount(1060), this.updateTimePerRender = 1
}, WebGLOneTest.prototype = Object.create(GraphicsTestBase.prototype), WebGLOneTest.prototype.renderLoopResultsReceived = function (e, s) {
  this.duration = e, this.frames = s
}, WebGLOneTest.prototype.shouldRestartRenderLoop = function () {
  return !1
}, WebGLOneTest.prototype.testCompleted = function () {
  BasemarkWebEngine.submitResult(this.frames, guide, {}, this.duration, this.frames / (.001 * this.duration), this.frames), BasemarkWebEngine.nextPage(location.pathname)
}, WebGLOneTest.prototype.initializeRenderTargetResources = function () {
  this.offScreenTex = null, this.displayTex = new THREE.WebGLRenderTarget(this.displayTexWidth, this.displayTexHeight, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBFormat
  }), this.copyTextureScene = new THREE.Scene, this.copyTextureQuad = createTextureCopyMesh(), this.copyTextureScene.add(this.copyTextureQuad)
}, WebGLOneTest.prototype.initializeAssets = function () {
  try {
    this.renderer = new THREE.WebGLRenderer
  } catch (e) {
    return void this.testFailed("Failed to create webgl1.0 renderer. Webgl1.0 not supported?")
  }
  this.loadTextures(["../__includes/full_scene/assets/textures/skybox_2k.png", "../__includes/full_scene/assets/textures/rain.png", "../__includes/full_scene/assets/textures/noise.jpg", "../__includes/full_scene/assets/textures/Robot_Albedo.png", "../__includes/full_scene/assets/textures/Robot_Normal.png", "../__includes/full_scene/assets/textures/Robot_Material.png", "../__includes/full_scene/assets/textures/ShadowMap.png", "../__includes/full_scene/assets/textures/spheremap.png", "../__includes/full_scene/assets/textures/spheremap_rough.png", "../__includes/full_scene/assets/textures/noise2.png", "../__includes/full_scene/assets/textures/Wall_A.png", "../__includes/full_scene/assets/textures/Wall_N.png", "../__includes/full_scene/assets/textures/Wall_Mat.png", "../__includes/full_scene/assets/textures/Main_A.png", "../__includes/full_scene/assets/textures/Main_N.png", "../__includes/full_scene/assets/textures/Main_Mat.png", "../__includes/full_scene/assets/textures/Decals_A.png"], this.afterAssetPreload)
}, WebGLOneTest.prototype.afterAssetPreload = function () {
  this.initializeRenderTargetResources(), this.mlpos, this.mldir, this.mlpos = new THREE.Vector4(20, 70, 0, 1), this.mldir = new THREE.Vector4(0, 0, 0, 1), this.robot_uniform_list = {
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
    moon_light_sharpness: {type: "f", value: null},
    drop_size: {type: "f", value: null},
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
    }
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
    }
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
    pl_pos: {type: "v3v", value: [new THREE.Vector3(-1, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(1, 1, 0)]},
    pl_intensity: {type: "fv1", value: [1, 1, 1]},
    pl_ambient: {type: "fv1", value: [.1, .1, .1]},
    pl_inner: {type: "fv1", value: [0, 0, 0]},
    pl_outer: {type: "fv1", value: [5, 5, 5]},
    pl_color: {
      type: "v3v",
      value: [new THREE.Vector3(.7, .3, .3), new THREE.Vector3(.3, .7, .3), new THREE.Vector3(.3, .3, .7)]
    }
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
    light_color: {type: "v3", value: new THREE.Vector3(1, 1, 1)},
    light_intensity: {type: "f", value: null},
    light_ambient: {type: "f", value: null},
    moon_light_sharpness: {type: "f", value: null},
    moon_light_spread: {type: "f", value: null},
    moon_light_pos: {type: "v3", value: this.mlpos},
    moon_light_dir: {type: "v3", value: this.mldir}
  }, this.emissive_uniform_list = {
    emission: {
      type: "v3",
      value: new THREE.Vector3(1, 1, 1)
    }
  }, this.cam_near = .01, this.cam_far = 100, this.scene = new THREE.Scene, this.container = document.getElementById(testContainerName), this.free_camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, this.cam_near, this.cam_far), this.current_camera = this.free_camera, this.scene_camera = null, this.zmesh, this.dae, this.renderer, this.robot_material, this.concrete_material, this.props_material, this.generic_material, this.lpos1, this.lpos2, this.lpos3, this.cam_anim = null, this.cam_tgt_anim = null, this.test_progress = 0, this.cam_progress = 0, this.cam_progress_spd = 1, this.cam_progress_auto = !0, this.robot = null, this.puddle = null, this.center_props = null, this.camera_controls, this.objectsToDisableOnDepthGeneration = [], this.compositor, this.debug_lines, this.sky, this.particle_geometry = new THREE.Geometry, this.sky_material = new THREE.MeshBasicMaterial({
    color: 16777215,
    map: this.getTexture("../__includes/full_scene/assets/textures/skybox_2k.png")
  }), this.sky = new THREE.Mesh(new THREE.SphereGeometry(30, 32, 32), this.sky_material)
  var e = this.getTexture("../__includes/full_scene/assets/textures/rain.png")
  for (i = 0; i < 500; i++) {
    var s = new THREE.Vector3, l = Math.random(), n = Math.random() + Math.random()
    s.x = 2.5 * Math.sin(l * Math.PI * 2) * n, s.y = 20 * Math.random(), s.z = 2.5 * Math.cos(l * Math.PI * 2) * n, this.particle_geometry.vertices.push(s)
  }
  this.particle_material = new THREE.PointCloudMaterial({
    size: 1,
    sizeAttenuation: !0,
    map: e,
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
  }]), this.particle_material.vertexShader = document.getElementById("particleVertexShader").textContent, this.particle_material.fragmentShader = document.getElementById("particleFragmentShader").textContent, this.particle_material.uniforms.noise.value = this.getTexture("../__includes/full_scene/assets/textures/noise.jpg"), this.particle_material.needsUpdate = !0, this.particles = new THREE.PointCloud(this.particle_geometry, this.particle_material), this.particles.position.set(-1, 0, 4), this.moonlight_uniform_control = {
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
  }, this.emissive_uniform_control = {Emission: [255, 255, 255]}, this.pp_bloom_control = {
    LuminanceCutoff: .09,
    LuminanceMultiplier: .9,
    GlowSize: 8.4
  }, this.rain_uniform_control = {
    Size: 1,
    Speed: 1,
    Color: [36, 161, 122],
    Contrast: .25,
    SpecStrength: 1
  }, this.pp_dof_control = {NormalizedFocusWidth: .1, Aperture: 0}
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
    fragmentShader: document.getElementById("emissivePixelShader").textContent,
    depthWrite: !1
  }), this.emissive_material.transparent = !0, this.emissive_material.blending = THREE.AdditiveBlending, this.generic_material = new THREE.ShaderMaterial({
    uniforms: this.generic_uniform_list,
    attributes: {},
    vertexShader: document.getElementById("genericVertexShader").textContent,
    fragmentShader: document.getElementById("genericFragmentShader").textContent
  }), this.showInfo("Loading scene_uv2.DAE....")
  var a = new THREE.ColladaLoader
  a.options.convertUpAxis = !0, a.load("../__includes/full_scene/assets/scene_uv2.DAE", function (e) {
    instance.dae = e.scene, instance.dae.traverse(function (s) {
      s instanceof THREE.PerspectiveCamera ? (instance.scene_camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, instance.cam_near, instance.cam_far), instance.scene_camera.position.copy(s.position), e.animations.length < 2 || (instance.cam_anim = new THREE.KeyFrameAnimation(e.animations[0]), instance.cam_tgt_anim = new THREE.KeyFrameAnimation(e.animations[1]), instance.reset_anim())) : s instanceof THREE.Mesh && (s.geometry.computeTangents(), 36 === s.id && (instance.center_props = s), "_4_robot" == s.material.name ? (s.material = instance.robot_material, instance.robot = s) : "_1_concrete" == s.material.name ? s.material = instance.concrete_material : "_2_props" == s.material.name ? s.material = instance.props_material : "_6_center" == s.material.name ? (s.material = instance.mat1_material, instance.puddle = s) : "_7_spiral" == s.material.name ? s.material = instance.mat2_material : "material3" == s.material.name ? s.material = instance.mat3_material : "material4" == s.material.name ? s.material = instance.mat4_material : "_3_decals" == s.material.name ? (s.material = instance.transp_decal_material, instance.objectsToDisableOnDepthGeneration.push(s)) : "_5_emissive" == s.material.name ? s.material = instance.emissive_material : s.material = instance.generic_material)
    }), null == instance.robot && null == instance.puddle && (instance.dae.scale.x = instance.dae.scale.y = instance.dae.scale.z = 1), instance.dae.updateMatrix(), instance.resumeAssetInitAfterMainSceneLoaded(), instance.showInfo("initialization done...")
  })
}, WebGLOneTest.prototype.resumeAssetInitAfterMainSceneLoaded = function () {
  for (var e = 50, s = 1.5, l = new THREE.Geometry, n = new THREE.LineBasicMaterial({color: 17561}), a = -e; e >= a; a += s) l.vertices.push(new THREE.Vector3(-e, -.04, a)), l.vertices.push(new THREE.Vector3(e, -.04, a)), l.vertices.push(new THREE.Vector3(a, -.04, -e)), l.vertices.push(new THREE.Vector3(a, -.04, e))
  this.debug_lines = new THREE.Line(l, n, THREE.LinePieces), this.scene.add(this.debug_lines), this.scene.add(this.dae), this.scene.add(this.particles), this.free_camera.position.set(5, 2, 5), this.objectsToDisableOnDepthGeneration.push(this.debug_lines), this.objectsToDisableOnDepthGeneration.push(this.particles), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.setSize(window.innerWidth, window.innerHeight), this.container.appendChild(this.renderer.domElement), this.renderer.gammaInput = !0, this.renderer.gammaOutput = !0, this.camera_controls = new THREE.OrbitControls(this.free_camera, this.renderer.domElement), this.compositor = new Compositor(this.renderer), this.compositor.createTextureResources(this.offscreenTexWidth, this.offscreenTexHeight), initGUI(), instance.scene_camera.updateProjectionMatrix(), instance.current_camera = instance.scene_camera, instance.cam_progress_spd = 1, this.update(), this.render(), this.assetInitializationDone()
}, WebGLOneTest.prototype.reset_anim = function () {
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
}, WebGLOneTest.prototype.update = function (e) {
  GraphicsTestBase.prototype.update.call(this, e)
  var s = this.updateTimePerRender
  this.current_camera == this.scene_camera && (this.cam_progress >= 0 && this.cam_progress < 1202 ? (this.cam_progress_spd && this.cam_progress_auto && (this.cam_anim.update(16.66666666 * s * this.cam_progress_spd), this.cam_tgt_anim.update(16.66666 * s * this.cam_progress_spd)), this.cam_progress_auto && (this.cam_progress += s * this.cam_progress_spd)) : (this.cam_anim.stop(), this.cam_tgt_anim.stop(), this.cam_progress = 0, this.reset_anim()))
  var l = new THREE.Vector3(0, 0, 0), n = new THREE.Vector3(0, 0, 0), a = new THREE.Quaternion(0, 0, 0, 0),
    t = new THREE.Vector3(0, 0, 0)
  this.cam_anim.hierarchy[0].matrix.decompose(l, a, t), this.scene_camera.position.copy(l), this.cam_tgt_anim.hierarchy[0].matrix.decompose(n, a, t), this.scene_camera.lookAt(n), this.current_camera.updateMatrixWorld(), this.current_camera.matrixWorldInverse.getInverse(this.current_camera.matrixWorld)
  var o = l.distanceTo(n), r = this.compositor.getEffect(CompositorEffects.DepthOfField)
  r.setupTargetDepth((o - this.cam_near) / (this.cam_far - this.cam_near)), this.particle_material.uniforms.timer.value = 10 * e * this.rain_uniform_control.Speed % 1200 / 10, this.particle_material.uniforms.needsUpdate = !0, this.robot_material.uniforms.timer.value = 10 * e * this.robot_uniform_control.RainDropSpeed % 1200 / 10, this.robot_material.uniforms.needsUpdate = !0, this.lpos1.set(this.pl1_uniform_control.X, this.pl1_uniform_control.Y, this.pl1_uniform_control.Z, 1), this.lpos2.set(this.pl2_uniform_control.X, this.pl2_uniform_control.Y, this.pl2_uniform_control.Z, 1), this.lpos3.set(this.pl3_uniform_control.X, this.pl3_uniform_control.Y, this.pl3_uniform_control.Z, 1), this.mlpos.set(20, 70, 0, 1), this.mldir.set(this.moonlight_uniform_control.X, this.moonlight_uniform_control.Y, this.moonlight_uniform_control.Z, 0), this.lpos1.applyMatrix4(this.current_camera.matrixWorldInverse), this.lpos2.applyMatrix4(this.current_camera.matrixWorldInverse), this.lpos3.applyMatrix4(this.current_camera.matrixWorldInverse), this.mlpos.applyMatrix4(this.current_camera.matrixWorldInverse), this.mldir.applyMatrix4(this.current_camera.matrixWorldInverse)
}, WebGLOneTest.prototype.render = function () {
  var e = new THREE.Matrix4
  e.makeScale(1, -1, 1), this.robot.matrixNeedsUpdate = !1, this.robot.matrixAutoUpdate = !1, this.robot.rotationAutoUpdate = !1, this.center_props.matrixNeedsUpdate = !1, this.center_props.matrixAutoUpdate = !1, this.center_props.rotationAutoUpdate = !1, this.robot.updateMatrix(), this.center_props.updateMatrix(), this.robot.matrix.multiply(e), this.robot.updateMatrixWorld(), this.center_props.matrix.multiply(e), this.center_props.updateMatrixWorld(), this.renderer.setFaceCulling(THREE.CullFaceBack, THREE.FrontFaceDirectionCW), this.renderer.render(this.center_props, this.current_camera, this.mat1_uniform_list.environment_map.value, !0), this.renderer.autoClear = !1, this.renderer.autoClearColor = !1, this.renderer.autoClearDepth = !1, this.renderer.autoClearStencil = !1, this.renderer.render(this.robot, this.current_camera, this.mat1_uniform_list.environment_map.value, !1), this.renderer.autoClear = !0, this.renderer.autoClearColor = !0, this.renderer.autoClearDepth = !0, this.renderer.autoClearStencil = !0, this.robot.matrix.multiply(e), this.robot.updateMatrixWorld(), this.center_props.matrix.multiply(e), this.center_props.updateMatrixWorld(), this.renderer.render(this.sky, this.current_camera, this.compositor.getRenderTarget()), this.renderer.setFaceCulling(THREE.CullFaceFront, THREE.FrontFaceDirectionCW), this.renderer.autoClear = !1, this.renderer.autoClearColor = !1, this.renderer.render(this.scene, this.current_camera, this.compositor.getRenderTarget()), this.renderer.autoClear = !0, this.renderer.autoClearColor = !0, this.renderer.autoClearDepth = !0, this.renderer.autoClearStencil = !0
  for (var s = 0; s < this.objectsToDisableOnDepthGeneration.length; ++s) this.objectsToDisableOnDepthGeneration[s].visible = !1
  this.compositor.generateDepthTexture(this.scene, this.current_camera)
  for (var s = 0; s < this.objectsToDisableOnDepthGeneration.length; ++s) this.objectsToDisableOnDepthGeneration[s].visible = !0
  this.compositor.applyPostProcessChain(), this.offScreenTex = this.compositor.getRenderTarget()
}
