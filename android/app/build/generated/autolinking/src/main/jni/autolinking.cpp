/**
 * This code was generated by [React Native](https://www.npmjs.com/package/@react-native/gradle-plugin).
 *
 * Do not edit this file as changes may cause incorrect behavior and will be lost
 * once the code is regenerated.
 *
 */

#include "autolinking.h"
#include <safeareacontext.h>
#include <react/renderer/components/safeareacontext/ComponentDescriptors.h>
#include <RNVectorIconsSpec.h>

namespace facebook {
namespace react {

std::shared_ptr<TurboModule> autolinking_ModuleProvider(const std::string moduleName, const JavaTurboModule::InitParams &params) {
auto module_safeareacontext = safeareacontext_ModuleProvider(moduleName, params);
if (module_safeareacontext != nullptr) {
return module_safeareacontext;
}
auto module_RNVectorIconsSpec = RNVectorIconsSpec_ModuleProvider(moduleName, params);
if (module_RNVectorIconsSpec != nullptr) {
return module_RNVectorIconsSpec;
}
  return nullptr;
}

std::shared_ptr<TurboModule> autolinking_cxxModuleProvider(const std::string moduleName, const std::shared_ptr<CallInvoker>& jsInvoker) {

  return nullptr;
}

void autolinking_registerProviders(std::shared_ptr<ComponentDescriptorProviderRegistry const> providerRegistry) {
providerRegistry->add(concreteComponentDescriptorProvider<RNCSafeAreaProviderComponentDescriptor>());
providerRegistry->add(concreteComponentDescriptorProvider<RNCSafeAreaViewComponentDescriptor>());
  return;
}

} // namespace react
} // namespace facebook