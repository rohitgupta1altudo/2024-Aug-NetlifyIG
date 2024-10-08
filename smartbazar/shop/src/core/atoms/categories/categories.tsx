import ErrorMessage from '@/core/atoms/ui/error-message';
import dynamic from 'next/dynamic';
import { useCategories } from '@/framework/category';

const StickySidebarListCategories = dynamic(
  () => import('@/core/atoms/categories/sticky-sidebar-list-categories')
);
const StaticSidebarVerticalRectangleCategories = dynamic(
  () => import('@/core/atoms/categories/sliding-vertical-rectangle-categories')
);
const StickySidebarBoxedCategories = dynamic(
  () => import('@/core/atoms/categories/sticky-sidebar-boxed-categories')
);
const FilterCategoryGrid = dynamic(
  () => import('@/core/atoms/categories/filter-category-grid')
);
const SlidingCardCategories = dynamic(
  () => import('@/core/atoms/categories/sliding-card-category')
);
const MAP_CATEGORY_TO_GROUP: Record<string, any> = {
  classic: StickySidebarListCategories,
  modern: StickySidebarBoxedCategories,
  standard: StaticSidebarVerticalRectangleCategories,
  minimal: FilterCategoryGrid,
  compact: SlidingCardCategories,
  default: StickySidebarListCategories,
};
interface CategoriesProps {
  layout: string;
  variables: any;
  className?: string;
}
export default function Categories({
  layout,
  className,
  variables,
}: CategoriesProps) {
  const { categories, isLoading, error } = useCategories(variables);

  if (error) return <ErrorMessage message={error.message} />;
  const Component = MAP_CATEGORY_TO_GROUP[layout];
  return (
    <Component
      notFound={!Boolean(categories.length)}
      categories={categories}
      loading={isLoading}
      className={className}
      variables={variables}
    />
  );
}
